<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Auth;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        $user->sendEmailVerificationNotification();

        return $user;
    }
    /*
     * SPA register request
     */
    protected function register(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
        if ($request->wantsJson()) {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);
            $user->sendEmailVerificationNotification();
            $user->status_code = 201;
            return $user;
        } else {
            $response = Response::json([
                "message" => "Bad Request",
                "status_code" => 400
            ], 400);
            return $response;
        }
    }
    /*
     * SPA email resend
     */
    protected function resendEmail(Request $request)
    {
        if(auth()->check()) {
            $user = auth()->user();
            if(!$user->email_verified_at) {
                //$user->sendEmailVerificationNotification();
                $user->status_code = 201;
                return $user;
            }
            $response = Response::json([
                "message" => "The email was verified",
                "status_code" => 200
            ]);
            return $response;
        } else {
            $response = Response::json([
                "message" => "Unauthorized",
                "status_code" => 401
            ]);
            return $response;
        }
    }
}
