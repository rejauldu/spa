<?php

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
Route::post('/login', function (Request $request) {
    $request->validate([
    	'email'=>'required',
    	'password'=>'required'
    ]);
    if ($request->wantsJson()) {   //add Accept: application/json in request
        auth()->attempt($request->only('email', 'password'));
        $user = auth()->user();
        if($user) {
            return $user;
        }
        return response()->json(['error'=>'Email or Password does not match'], 401);
    } else {
        return response()->json(['error'=>'Bad Request'], 400);
    }
});
Route::post('/logout', function (Request $request) {
    Auth::logout();
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
