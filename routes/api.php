<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/user', function (Request $request) {
    if(auth()->check()) {
        $user = auth()->user();
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
});
Route::get('/products/{query?}', 'Backend\ProductController@index');
Route::get('/product/{id}', 'Backend\ProductController@show');
Route::post('/login', function (Request $request) {
    $request->validate([
    	'email'=>'required',
    	'password'=>'required'
    ]);
    if ($request->wantsJson()) {
        auth()->attempt($request->only('email', 'password'));
        $user = auth()->user();
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
});
Route::post('/register', function (Request $request) {
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
});
Route::post('/resend/email', function (Request $request) {
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
});
Route::get('/get-locations', function (Request $request) {
    $divisions = \App\Locations\Division::all();
    $regions = \App\Locations\Region::all();
    $response = Response::json([
        "divisions" => $divisions,
        "regions" => $regions
    ]);
    return $response;
});
Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::post('/logout', function (Request $request) {
    Auth::logout();
});
Route::group(['middleware' => ['auth:sanctum', 'verified']], function () {

});
