<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="keywords" content="{{ __('index.keywords') }}" />
    <meta name="description" content="{{ __('index.description') }}" />
    <meta name='author' content='{{ config('app.name', 'Laravel') }}' />
    <meta name='copyright' content='{{ config('app.name', 'Laravel') }}' />
    <meta name='summary' content="{{ __('index.summary') }}" />
    <meta name='Classification' content='Company' />
    <meta name='designer' content='{{ config('app.name', 'Laravel') }}' />
    <meta name='reply-to' content='{{ config('app.name', 'Laravel') }}' />
    <meta name='url' content='{{ config('app.url', 'Laravel') }}' />
    <!!--For iOS-->
    <link rel="apple-touch-icon" href="apple-touch-iphone.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-ipad.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-iphone4.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="apple-touch-ipad-retina.png" />
    <!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<!--base url for Script files -->
	<meta name="base-url" content="{{ route('index') }}">
	<!--Facebook Share-->
	<meta property="og:url"           content="{{ Request::url() }}" />
	<meta property="og:type"          content="product" />
	<meta property="og:title"         content="{{ __('Formalin-free mango') }}" />
	<meta property="og:description"   content="{{ __('index.slogan') }} {{ __('index.promise') }}" />
	@if(isset($product))
	<meta property="og:image"         content="{{ url('/assets/products') }}/{{ $product->image1 ?? 'not-found.jpg' }}" />
	@else
	<meta property="og:image"         content="{{ asset('/assets/logo.png') }}" />
	@endif
	<meta property="fb:app_id"   content="2588391271421526" />
	<!--/Facebook Share end-->
	<title>@yield('title')</title>
	<link rel="icon" href="{{ asset('assets/favicon.ico') }}" type="image/gif" sizes="16x16">
	<!-- Fonts -->
	<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></noscript>
	<!-- All packages style -->
	<!-- All packages style -->
	<link href="{{ asset('css/frontend/app.css') }}" rel="stylesheet">
	<link href="{{ asset('css/style.css') }}" rel="stylesheet">

	@yield('style')
</head>
<body>
	@yield('content')
    <footer class="bg-dark text-center p-2 w-100">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-3">
                <h5 class="text-light pt-3">{{ __('Members Area') }}</h5>
                <ul class="list-group list-group-flush">
                    @auth
                    <li class="list-group-item bg-transparent"><a class="text-white" href="{{ route('dashboard') }}"><i class="fa fa-dashboard"></i> {{ __('Dashboard') }}</a></li>
                    <li class="list-group-item bg-transparent"><a class="text-white" href="{{ route('logout') }}" onclick="if (!window.__cfRLUnblockHandlers) return false; event.preventDefault(); document.getElementById('logout-form').submit();"><i class="fa fa-sign-out"></i> {{ __('Logout') }}</a></li>
                    @endauth
                    @guest
                    <li class="list-group-item bg-transparent"><a class="text-white" href="{{ route('login') }}"><i class="fa fa-sign-in"></i> {{ __('Login') }}</a></li>
                    <li class="list-group-item bg-transparent"><a class="text-white" href="{{ route('register') }}"><i class="fa fa-registered"></i> {{ __('Register') }}</a></li>
                    @endguest
                </ul>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <h5 class="text-light pt-3">{{ __('More about') }} <a href="{{ route('index') }}">{{ __(config('app.name')) }}</a></h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-transparent"><a class="text-white" href="{{ route('contact-us.index') }}"><i class="fa fa-envelope"></i> {{ __('Contact Us') }}</a></li>
                    <li class="list-group-item bg-transparent"><a class="text-white" href="{{ route('privacy-policy') }}"><i class="fa fa-lock"></i> {{ __('Privacy Policy') }}</a></li>
                </ul>
            </div>
            @computer
            <div class="col-12 col-sm-6 col-md-3">
                <h5 class="text-light pt-3">{{ __('Subscribe to') }} <a href="{{ route('index') }}">{{ __(config('app.name')) }}</a></h5>
                <form action="{{ route('subscriptions.store') }}" method="post">
                    <div class="input-group">
                            @csrf
                            <input type="email" name="email" class="form-control" placeholder="email@example.com">

                        <div class="input-group-append">
                            <button class="btn btn-success" type="submit">{{ __('Go') }}</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <h5 class="text-light pt-3">{{ __('Find us on') }}</h5>
                <div class="d-flex">
                    <ul class="list-group list-group-horizontal mx-auto">
                        <li class="list-group-item bg-transparent"><a class="text-white" href="https://facebook.com/onbiponi"><i class="fa fa-facebook"></i></a></li>
                        <li class="list-group-item bg-transparent"><a class="text-white" href="https://onbiponi.blogspot.com"><i class="fa fa-google"></i></a></li>
                        <li class="list-group-item bg-transparent"><a class="text-white" href="https://www.instagram.com/onbiponi"><i class="fa fa-instagram"></i></a></li>
                        <li class="list-group-item bg-transparent"><a class="text-white" href="https://twitter.com/onbiponi"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                </div>
                <div class="d-flex">
                    <ul class="list-group list-group-horizontal mx-auto">
                        <li class="list-group-item bg-transparent"><a class="text-white" href="https://www.linkedin.com/company/onbiponi"><i class="fa fa-linkedin"></i></a></li>
                        <li class="list-group-item bg-transparent"><a class="text-white" href="https://www.upwork.com/agencies/~01827f5c7ac62e3e02"><i class="fa fa-circle-o"></i></a></li>
                        <li class="list-group-item bg-transparent"><a class="text-white" href="https://www.behance.net/onbiponi"><i class="fa fa-behance"></i></a></li>
                        <li class="list-group-item bg-transparent"><a class="text-white" href="https://www.youtube.com/channel/UC7q1Neydzi_4aNEYFAv1n8w"><i class="fa fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
            @endcomputer
        </div>
        <div class="row bg-dark">
            <div class="col-12 text-center text-secondary">{{ __('Copyright') }} &copy; {{ date("Y") }}. {{ __('All rights reserved by') }} <strong>{{ __(config('app.name')) }}</strong></div>
        </div>
    </footer>
    <div class="img-thumbnail rounded-circle" id="cart"><a class="btn btn-link btn-sm" href="{{ route('cart') }}"><i class="fa fa-shopping-cart"><span class="product-number badge badge-warning text-success">@{{ totalProduct }}</span></i></a></div>
	@auth
	<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
		@csrf
	</form>
	<form id="delete-form" action="#" method="POST" style="display: none;">
		@csrf
		@delete
	</form>
	@endauth
	<!-- Default Success Modal called from JavaScript -->
	<div class="modal fade" id="success-modal">
		<div class="modal-dialog modal-dialog-centered modal-sm">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">{{ __('Success') }}</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div>
				<!-- Modal body -->
				<div class="modal-body text-success">
				{{ __('Updated successfully') }}
				</div>
				<!-- Modal footer -->
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">{{ __('Ok') }}</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Default Success Modal called from JavaScript -->
	<div class="modal fade" id="error-modal">
		<div class="modal-dialog modal-dialog-centered modal-sm">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">{{ __('Error<') }}/h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div>
				<!-- Modal body -->
				<div class="modal-body text-danger">
				{{ __('Error! Update error. Please try again.') }}
				</div>
				<!-- Modal footer -->
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">{{ __('Ok') }}</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Scripts -->
	<script src="{{ asset('js/app.js') }}" defer></script>
	<script src="{{ asset('js/theme.js') }}" defer></script>
	@yield('script')
</body>
</html>
