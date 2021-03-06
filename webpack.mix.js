const mix = require('laravel-mix');


require('laravel-mix-polyfill');
const TargetsPlugin = require('targets-webpack-plugin');
mix.webpackConfig({
    plugins: [
        new TargetsPlugin({
          browsers: ['last 2 versions', 'chrome >= 41', 'IE 11'],
        }),
      ]
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(
        [
            'resources/js/app.js',
            'public/js/theme.js'
        ],'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .polyfill({
        enabled: true,
        useBuiltIns: "usage",
        targets: {"ie": 11},
        debug: true,
        corejs: 3,
    });
