<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ mix('css/app.css') }}?{{ time() }}" rel="stylesheet" />
        <link href="{{ asset('css/theme.css') }}" rel="stylesheet" />
        <title>Laravel</title>
    </head>
    <body>
        <div id="app">
            <layout></layout>
        </div>
        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <script src="{{ mix('js/app.js') }}?{{ time() }}"></script>
        <script src="{{ asset('js/theme.js') }}"></script>
    </body>
</html>
