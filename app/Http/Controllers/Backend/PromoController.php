<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Promo;
use Response;

class PromoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$promos = Promo::orderBy('id', 'desc')->get();
		return view('backend.promos.index', compact('promos'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
		return view('backend.promos.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		$data = $request->except('_token', '_method');
		Promo::create($data);
		return redirect(route('promos.index'))->with('message', 'Promo created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $promo = Promo::find($id);
		return view('backend.promos.show', compact('promo'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $promo = Promo::find($id);
		return view('backend.promos.create', compact('promo'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
		$data = $request->except('_token', '_method');
		if(!isset($data['is_active'])) {
			$data['is_active'] = 0;
		}
		$promo = Promo::find($id);
		$promo->update($data);

		return redirect(route('promos.index'))->with('message', 'Promo updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		$promo = Promo::find($id);
		$promo->delete();
		return redirect()->back()->with('message', 'Promo has been deleted');
    }

    /**
     * Display the specified resource in SPA.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function promo(Request $request)
    {
        if(Auth::check())
            $response = Promo::select('promo', 'percent')->where('promo', $request->promo)->where(function($q) {
                $q->where('created_for_user', auth()->user()->id)
                    ->orWhere('created_for_user', 0)
                    ->orWhereNull('created_for_user');
            })->first();
        else
            $response = Promo::select('promo', 'percent')->where('promo', $request->promo)->where(function($q) {
                $q->where('created_for_user', 0)
                    ->orWhereNull('created_for_user');
        })->first();
        if ($response === null) {
            $response = Response::json([
                "promo" => $request->promo,
                "percent" => 0
            ]);
        }
        return $response;
    }
}
