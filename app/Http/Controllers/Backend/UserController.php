<?php

namespace App\Http\Controllers\BackEnd;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use App\User;
use App\Payment;
use App\Locations\Division;
use App\Locations\District;
use App\Locations\Upazila;
use App\Locations\Union;
use App\Locations\Region;
use Illuminate\Support\Facades\Hash;
use Auth;
use Response;

class UserController extends Controller
{
	public function __construct()
	{
		//$this->middleware('moderatorOrOwner:User');
	}
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$users = User::with('district', 'role')->orderBy('users.id', 'desc')->paginate(50);
        return view('backend.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.emails.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
		$profile = User::with('payment', 'division', 'district', 'upazila', 'union', 'region', 'billing_division', 'billing_district', 'billing_upazila', 'billing_union', 'billing_region', 'shipping_division', 'shipping_district', 'shipping_upazila', 'shipping_union', 'shipping_region')->where('id', $id)->first();
		$payments = Payment::all();
		$divisions = Division::all();
		$districts = District::all();
		$upazilas = Upazila::all();
		$unions = Union::all();
		$regions = Region::all();
        return view('backend.users.show', compact('profile', 'payments', 'divisions', 'districts', 'upazilas', 'unions', 'regions'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
		$profile = User::with('payment', 'division', 'district', 'upazila', 'union', 'region', 'billing_division', 'billing_district', 'billing_upazila', 'billing_union', 'billing_region', 'shipping_division', 'shipping_district', 'shipping_upazila', 'shipping_union', 'shipping_region')->where('id', $id)->first();
		$payments = Payment::all();
		$divisions = Division::all();
		$districts = District::all();
		$upazilas = Upazila::all();
		$unions = Union::all();
		$regions = Region::all();
        return view('backend.users.edit', compact('profile', 'payments', 'divisions', 'districts', 'upazilas', 'unions', 'regions'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $id)
    {
		$file = $request->file('photo');
		if($file) {
			$destination_path = 'assets/profile';
			$new_name = $id.'.'.$file->getClientOriginalExtension();
			$file->move($destination_path, $new_name);
			User::where('id', $id)->update(['photo'=>$new_name]);
			if($request->data_source && $request->data_source == 'frontend') {
				User::where('id', $id)->update($request->except('_token', '_method', 'data_source', 'photo'));
			}
		} elseif($request->password_old) {
			$user = User::find($id);
			if(Hash::check($request->password_old, $user->password)) {
				$user->fill([
					'password' => Hash::make($request->password)
				])->save();
			} else {
				return 'Password did not match';
			}
		} else {
			User::where('id', $id)->update($request->except('_token', '_method', 'password_old', 'password', 'password_confirmation', 'data_source', 'photo'));
		}
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		$user = User::find($id);
		$user->delete();
		return redirect()->back()->with('message', 'User has been deleted');
    }
    /*
     * All SPA visitors request user info on page request to backend
     */
    public function user(Request $request)
    {
        if(auth()->check()) {
            $user = User::with('division', 'region')->find(Auth::id());
            if($user->email_verified_at) {
                $user->status_code = 200;
                return $user;
            }
            $response = Response::json([
                "message" => "Before proceeding, please check your email for a verification link",
                "status_code" => 401
            ]);
            return $response;
        } else {
            $response = Response::json([
                "message" => "Bad Request",
                "status_code" => 400
            ]);
            return $response;
        }
    }
}
