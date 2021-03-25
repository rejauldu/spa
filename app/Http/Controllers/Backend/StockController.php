<?php

namespace App\Http\Controllers\Backend;

use App\Product;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Stock;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $stocks = [];
        if($user->role_id == config('auth.admin')['super'] || $user->role_id == config('auth.admin')['moderator']) {
            $stocks = Stock::with('product', 'user', 'creator')->orderBy('id', 'desc')->get();
        } elseif($user->role_id == config('auth.admin')['agent']) {
            $stocks = Stock::where('user_id', $user->id)->with('product', 'user', 'creator')->orderBy('id', 'desc')->get();
        }

		return view('backend.stocks.index', compact('stocks'));
    }
    public function sent()
    {
        $user = Auth::user();
        $stocks = Stock::where('created_by', $user->id)->with('product', 'user', 'creator')->orderBy('id', 'desc')->get();
        return view('backend.stocks.index', compact('stocks'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $products = Product::with('size', 'color')->get();
        $agents = User::where('role_id', config('auth.admin')['agent'])->get();
		return view('backend.stocks.create', compact('products', 'agents'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		$data = $request->except('_token', '_method');
		$user = Auth::user();
		$data['created_by'] = $user->id;
		if($user->role_id == config('auth.admin')['agent']) {
            $data['user_id'] = 1; /*Returned product will be received by ID 1 */
        }
        Product::increase($request->product_id, $request->amount);
		Stock::create($data);
		return redirect(route('stocks-sent'))->with('message', 'Stock created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $stock = Stock::find($id);
		return view('backend.stocks.show', compact('stock'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $products = Product::all();
        $agents = User::where('role_id', config('auth.admin')['agent'])->get();
        $stock = Stock::find($id);
		return view('backend.stocks.create', compact('products', 'agents', 'stock'));
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
		$data = $request->except('_token', '_method', 'product_id');
		$user = Auth::user();
        $data['created_by'] = $user->id;
		$stock = Stock::find($id);
        if($stock->created_by == $user->id && !$stock->accepted_by) {
            Product::increase($stock->product_id, $request->amount-$stock->amount);
            $stock->update($data);
            return redirect(route('stocks-sent'))->with('message', 'Stock updated successfully');
        } else {
            return redirect()->back()->with('message', 'Permission denied');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function accept($id)
    {
        $user = Auth::user();
        $stock = Stock::find($id);
        if($user->id == $stock->user_id) {
            $stock->update(['accepted_by' => $user->id]);
            return redirect(route('stocks.index'))->with('message', 'Product received successfully');
        } else
            return redirect(route('stocks.index'))->with('message', 'You are not authorized to accept this product');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		$stock = Stock::find($id);
		$user = Auth::user();
        if($stock->created_by == $user->id && !$stock->accepted_by) {
            Product::increase($id, -1*$stock->amount);
            $stock->delete();
            return redirect()->back()->with('message', 'Stock has been deleted');
        } else {
            return redirect()->back()->with('message', 'Permission denied');
        }
    }
}
