<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!--base url for Script files -->
        <meta name="base-url" content="{{ url('/') }}">
        <link rel="apple-touch-icon" href="{{ url('/') }}/assets/logo.png?q=low&alpha=1">
        <title>SPA by OnBiponi</title>
        <link rel="icon" href="{{ asset('/assets/favicon.ico') }}" sizes="16x16">
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4ebac3">
        <meta http-equiv="Cache-control" content="public">
        <link href="{{ mix('css/app.css') }}?{{ time() }}" rel="stylesheet" />
        <link href="{{ asset('css/theme.css') }}?{{ time() }}" rel="stylesheet" />
    </head>
    <body>
        <div id="app">
            <layout></layout>
        </div>
        <script src="{{ mix('js/manifest.js') }}" crossorigin="anonymous" defer></script>
        <script src="{{ mix('js/vendor.js') }}?{{ time() }}" crossorigin="anonymous" defer></script>
        <script src="{{ mix('js/app.js') }}?{{ time() }}" crossorigin="anonymous" defer></script>
        <script src="{{ asset('js/theme.js') }}" crossorigin="anonymous" defer></script>
    </body>
</html>
