<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::prefix('admin')->group(function () {
    Route::resource('blogs', 'Backend\BlogController');
    Route::get('/manage-blogs', 'Backend\BlogController@manageIndex')->name('manage-blogs');
    Auth::routes(['verify' => true]);
    Route::resource('contact-us', 'Backend\ContactUsController');
    Route::resource('divisions', 'Locations\DivisionController');
    Route::resource('districts', 'Locations\DistrictController');
    Route::resource('upazilas', 'Locations\UpazilaController');
    Route::resource('unions', 'Locations\UnionController');
    Route::resource('orders', 'Backend\OrderController');
    Route::get('cart', 'Backend\OrderController@cart')->name('cart');
    Route::get('checkout', 'Backend\OrderController@checkout')->name('checkout');
    Route::get('order-complete', 'Backend\OrderController@orderComplete')->name('order-complete');
    Route::get('card-payment/{id}', 'Frontend\StripePaymentController@stripe')->name('card-payment');
    Route::get('get-regions-by-division/{division}', 'Locations\RegionController@getRegionsByDivision');
    Route::post('stripe', 'Frontend\StripePaymentController@stripePost')->name('stripe.post');

    Route::get('login/{social}', 'Backend\SocialLoginController@redirectToProvider')->name('social.callback');
    Route::get('login/{social}/callback', 'Backend\SocialLoginController@handleProviderCallback')->name('social.redirect');
    Route::resource('notifications', 'Backend\NotificationController');
    Route::get('notifications-all', 'Backend\NotificationController@all')->name('notifications.all');
    Route::post('email', 'Backend\NotificationController@email')->name('email');
    Route::get('privacy-policy', 'Frontend\HomeController@privacyPolicy')->name('privacy-policy');
    Route::get('terms-conditions', 'Frontend\HomeController@privacyPolicy')->name('terms-conditions');

    //Routes for dashboard
    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/', 'Backend\DashboardController@dashboard')->name('index');
        Route::resource('cashbooks', 'Backend\CashbookController');
        Route::resource('categories', 'Backend\CategoryController')->middleware('moderator:Category');
        Route::get('chats/delete/{id?}', 'Backend\ChatController@destroy')->name('chats.destroy');
        Route::get('chats/block/{id?}', 'Backend\ChatController@block')->name('chats.block');

        Route::get('checkout-login', 'Backend\OrderController@checkoutLogin')->name('checkout-login');
        Route::resource('colors', 'Backend\ColorController')->middleware('moderator:Color');
        Route::get('/dashboard', 'Backend\DashboardController@dashboard')->name('dashboard');
        Route::resource('home-sliders', 'Backend\ColorController')->middleware('moderator:Color');
        Route::resource('order-details', 'Backend\OrderDetailController');
        Route::get('orders-incomplete', 'Backend\OrderController@incomplete')->name('orders.incomplete');
        Route::resource('order-statuses', 'Backend\OrderStatusController')->middleware('moderator:Order Status');
        Route::get('orders-user', 'Backend\OrderController@user')->name('orders.user');
        Route::resource('payments', 'Backend\PaymentController')->middleware('moderator:Payment');
        Route::resource('promos', 'Backend\PromoController')->middleware('moderator:Payment');
        Route::resource('permissions', 'Backend\PermissionController')->middleware('moderator:Permission');
        Route::put('permissions-update', 'Backend\PermissionController@updateList')->name('permissions.update.list')->middleware('moderator:Permission');
        Route::get('manage-products', 'Backend\ProductController@manageIndex')->name('manage-products.index')->middleware('moderator:Product');
        Route::resource('manage-products', 'Backend\ProductController')->except(['index', 'show'])->middleware('moderator:Product');
        Route::resource('regions', 'Locations\RegionController');
        Route::resource('shippers', 'Backend\ShipperController')->middleware('moderator:Shipper');
        Route::resource('sizes', 'Backend\SizeController')->middleware('moderator:Size');
        Route::resource('stocks', 'Backend\StockController');
        Route::get('stocks-accept/{stock_id}', 'Backend\StockController@accept')->name('stocks-accept');
        Route::get('stocks-sent', 'Backend\StockController@sent')->name('stocks-sent');
        Route::resource('suppliers', 'Backend\SupplierController')->middleware('moderator:Supplier');
        Route::resource('units', 'Backend\UnitController')->middleware('moderator:Unit');
        Route::resource('users', 'Backend\UserController');
        Route::get('users/login/{user}', 'Backend\UserController@login')->name('users.login');
        Route::post('change-role', 'Backend\UserController@changeRole')->name('users.change-role');
    });
    Route::resource('products', 'Backend\ProductController')->only(['index', 'show']);
    Route::post('subscriptions', 'Backend\ContactUsController@subscribe')->name('subscriptions.store');
    Route::get('sitemap.xml', 'Backend\AccessoriesController@sitemap');
});
Route::get('clear-cache', 'Backend\AccessoriesController@clearCache');
Route::get('cache', 'Backend\AccessoriesController@cache');

Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::middleware('cache.headers:public;max_age=3600;etag')->group(function () {
    Route::resource('chats', 'Backend\ChatController')->except(['destroy'])->middleware('auth');
    Route::any('/{slug}', 'SpaController@index')->where('slug', '.*');
});

