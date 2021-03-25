<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Controllers\Controller;
use Auth;
use App\Order;
use App\Product;
use App\OrderDetail;
use App\Cashbook;
use App\OrderStatus;
use App\User;
use App\Guest;
use App\Locations\Division;
use App\Locations\Region;
use App\Stock;

class OrderController extends Controller
{
	public function __construct() {
        $this->middleware('agent', ['except' => ['store', 'cart', 'checkout', 'orderComplete', 'checkoutLogin', 'getOrders']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$user = Auth::user();
		$orders = Order::with('customer', 'guest', 'status');
		if($user->role_id == 1)
			$orders = $orders->whereHas('details', function(Builder $query) use($user) {
				$query->whereHas('product', function(Builder $q) use($user) {
					$q->where('supplier_id', $user->id);
				});
			});
		$orders = $orders->orderBy('id', 'desc')->get();
		return view('backend.orders.index', compact('orders'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

		return view('backend.orders.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		if(Auth::check()) {
			$user = Auth::user();
			$data['customer_id'] = $user->id;
		} else {
            $inputs = ['name' => $request->name, 'division_id' => $request->division_id, 'region_id' => $request->region_id, 'address' => $request->address, 'phone' => $request->phone];
			$guest = Guest::create($inputs);
			$data['guest_id'] = $guest->id;
		}
		$data['order_status_id'] = 1;
		$data['payment_id'] = $request->payment_id;
        if($request->promo) {
            $data['promo'] = $request->promo;
        }
		if($request->payment_id == 1) {
            $data['trxid'] = $request->trxid;
            $data['order_status_id'] = 3;
        }
		$order = Order::create($data);
		for($i=0; $i<count($request->products); $i++) {
		    $product = Product::find($request->products[$i]);
			OrderDetail::create(['order_id' => $order->id, 'product_id' => $product->id, 'quantity' => $request->quantities[$i], 'price' => $product->msrp, 'total' => $product->msrp*$request->quantities[$i]]);
		}
		$order->update(['amount' => $this->totalPrice($order)]);
		return 'Order Received';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
		$user = Auth::user();
        $order = Order::with('details.product')
		->where('id', $id)
		->first();
		$shipping = $this->shipping($order);
		$packaging = $this->packaging($order);
		return view('backend.orders.show', compact('order', 'shipping', 'packaging'));
    }

    /**
     * Display the specified resource in SPA.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showSpa($id)
    {
        $order = [];
        if(Auth::check())
            $order = Order::where('id', $id)->with('status', 'details.product', 'payment')->first();
        return $order;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
		$user = Auth::user();
		$statuses = OrderStatus::all();
        $order = Order::with(['customer', 'details.product', 'customer.region', 'customer.division', 'payment', 'guest.billing_region', 'guest.billing_division'])->where('id', $id)->first();
        $shipping = $this->shipping($order);
		$packaging = $this->packaging($order);
		$crate = $this->crate($order);
		$carton = $this->carton($order);
		return view('backend.orders.create', compact('order', 'statuses', 'shipping', 'packaging', 'crate', 'carton'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
		$data = $request->except('_token', '_method');
		$order = Order::where('id', $id)->with('details.product')->first();
		$user = Auth::user();
		$credited_ids = [3, 4, 5]; /*Cashed in to cashbook*/
		$debited_ids = [1, 2, 6, 7, 8]; /*Cashed not in to cashbook*/
		if(in_array($request->order_status_id, $credited_ids) && in_array($order->order_status_id, $debited_ids)) {
			$this->cashbook($order);
			$this->stock($order, $user);
		} elseif(in_array($request->order_status_id, $debited_ids) && in_array($order->order_status_id, $credited_ids)) {
			$cashbook_id = Cashbook::where('order_id', $id)->pluck('id');
			Cashbook::destroy($cashbook_id);
            $this->stock($order, $user, false);
		}
		$order->update(['order_status_id' => $request->order_status_id]);
		return redirect(route('orders.index'))->with('message', 'Order updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		$order = Order::find($id);
		$order->delete();
		return redirect()->back()->with('message', 'Order has been deleted');
    }

	public function incomplete()
    {
		$user = Auth::user();
		$orders = Order::where(function($q) {
            $q->where('order_status_id', 1)
                ->orWhere('order_status_id', 3);
        })
        ->with('customer.division', 'customer.region', 'guest.division', 'guest.region', 'status', 'payment');
		if($user->role_id == 1)
			$orders = $orders->whereHas('details', function(Builder $query) use($user) {
				$query->whereHas('product', function(Builder $q) use($user) {
					$q->where('supplier_id', $user->id);
				});
			});
		$orders = $orders->orderBy('id', 'desc')->get();

		return view('backend.orders.index', compact('orders'));
    }
	/**
     * Display a listing of the resource for a specific user.
     *
     * @return \Illuminate\Http\Response
     */
    public function user()
    {
		$user = Auth::user();
		$orders = Order::where('customer_id', $user->id)->with('customer', 'order_status')->orderBy('id', 'desc')->get();
		return view('backend.orders.index', compact('orders'));
    }
	public function cashbook($order)
    {
		$user = User::whereHas('products', function($query) use($order) {
			$query->whereHas('order_details', function($qry) use($order) {
				$qry->whereHas('order', function($q) use($order) {
					$q->where('id', $order->id);
				});
			});
		})->first();
		$user = Auth::user();
		$cumulative_amount = Cashbook::latest()->pluck('cumulative_amount')->first();
		$cashbook = [];
		$amount = $this->total($order);
		$cashbook['action'] = 'credit';
		$cashbook['amount'] = $amount;
		$cashbook['cumulative_amount'] = $amount+$cumulative_amount;
		$cashbook['order_id'] = $order->id;
		$cashbook['user_id'] = $user->id;
		$cashbook['owned_by'] = $user->id;
		Cashbook::create($cashbook);
	}
	public function total($order)
    {
		$total = 0;
		foreach($order->details as $detail) {
			$total+=($detail->product->msrp * $detail->quantity);
		}
		return $total;
	}
	public function cart()
    {
		return view('frontend.cart');
    }
	public function checkout()
    {
        $order = Order::where('id', 237)->first();
        $divisions = Division::all();
        $regions = Region::all();
        $profile = '';
        if(Auth::check()) {
            $user = Auth::user();
            $profile = User::with('division', 'region')->where('id', $user->id)->first();
        }
		return view('frontend.checkout', compact('divisions', 'regions', 'profile'));
    }
    public function orderComplete()
    {
		return view('frontend.order-complete');
    }
    public function checkoutLogin()
    {
		return redirect()->route('checkout');
    }
    private function shipping($order)
    {
		if($order->total_product<12)
		    return 12*15;
	    return $order->total_product*15;
    }
    private function packaging($order)
    {
        $total = $order->total_product;
		if($total<16)
		    return 50;
		  else if($total<26)
		    return 150;
		  else {
		    $crate = floor($total/25);
		    $reminder = $total%25;
		    $carton = 0;
		    if($reminder<16)
		        $carton = 1;
		    else
		        $crate +=1;
	        return $crate*150+$carton*50;
        }
    }
    private function crate($order) {
        $total = $order->total_product;
        $crate = floor($total/25);
        $reminder = $total%25;
		    $carton = 0;
		    if($reminder<16)
		        $carton = 1;
		    else
		        $crate +=1;
        return $crate;
    }
    private function carton($order) {
        $total = $order->total_product;
        $crate = floor($total/25);
        $reminder = $total%25;
		    $carton = 0;
		    if($reminder<16)
		        $carton = 1;
		    else
		        $crate +=1;
        return $carton;
    }
    private function totalPrice($order)
    {
        return $this->total($order);
    }

    /**
     * Display a listing of the resource in SPA.
     *
     * @return \Illuminate\Http\Response
     */
    public function getOrders()
    {
        $user = auth()->user();
        if($user) {
            $orders = Order::where('customer_id', $user->id)->with('status')->latest()->paginate(5);
            return $orders;
        }
        return '';
    }
    public function stock($order, $user, $credit = true) {
        $created_by = $user->id;
        $accepted_by = $order->customer_id;
        if(!$credit) {
            $created_by = $order->customer_id;
            $accepted_by = $user->id;
        }
        foreach($order->details as $detail) {
            Stock::create(['product_id'=>$detail->product_id, 'user_id' => $accepted_by, 'amount' => $detail->quantity, 'created_by' => $created_by, 'accepted_by' => $accepted_by]);
        }
    }
}
