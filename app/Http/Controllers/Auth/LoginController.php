<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Response;
use App\User;
use Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    /*
     * SPA login request
     */
    public function login(Request $request)
    {
        $request->validate([
            'email'=>'required',
            'password'=>'required'
        ]);
        if ($request->wantsJson()) {
            auth()->attempt($request->only('email', 'password'));
            $user = \App\User::with('division', 'region')->find(Auth::id());
            if($user) {
                if($user->email_verified_at) {
                    $user->status_code = 200;
                    return $user;
                }
                $response = Response::json([
                    "message" => "Before proceeding, please check your email for a verification link",
                    "status_code" => 401
                ]);
                return $response;
            }
            $response = Response::json([
                "message" => "Email or Password does not match",
                "status_code" => 400
            ], 400);
            return $response;
        } else {
            $response = Response::json([
                "message" => "Bad Request",
                "status_code" => 400
            ], 400);
            return $response;
        }
    }
}
