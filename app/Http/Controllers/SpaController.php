<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class SpaController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $products = Product::select('id', 'name', 'image1', 'note', 'msrp')->get();
        return view('spa', compact('products'));
    }
}
