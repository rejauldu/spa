<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use patie\Sitemap\SitemapGenerator;
use Artisan;

class AccessoriesController extends Controller
{
    public function sitemap() {
    	SitemapGenerator::create(url('/'))->writeToFile('sitemap.xml');
    }
    public function cache() {
    	Artisan::call('config:cache');
		Artisan::call('route:cache');
		return redirect()->route('index');
    }
    public function clearCache() {
    	Artisan::call('cache:clear');
		Artisan::call('view:clear');
		Artisan::call('config:clear');
		Artisan::call('route:clear');
		return redirect()->route('index');
    }
}
