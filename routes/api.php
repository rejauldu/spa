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
Route::get('/user', 'Backend\UserController@user');
Route::get('/products/{query?}', 'Backend\ProductController@index');
Route::get('/product/{id}', 'Backend\ProductController@show');
Route::post('/login', 'Auth\LoginController@login');
Route::post('/register', 'Auth\RegisterController@register');
Route::post('/resend/email', 'Auth\RegisterController@resendEmail');
Route::get('/get-locations', 'Locations\LocationController@index');
Route::get('/get-orders', 'Backend\OrderController@getOrders');
Route::get('/orders/{id}', 'Backend\OrderController@showSpa');
Route::post('/promo', 'Backend\PromoController@promo');
Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::post('/logout', 'Auth\LoginController@logout');
Route::get('pages/{page}', 'Backend\PageController@page');
