<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\OrderStatus;

class OrderStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		
		$order_statuses = OrderStatus::orderBy('id', 'desc')->get();
		return view('backend.order-statuses.index', compact('order_statuses'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
		return view('backend.order-statuses.create');
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
		OrderStatus::create($data);
		return redirect(route('order-statuses.index'))->with('message', 'Order Status created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
		
        $order_status = OrderStatus::find($id);
		return view('backend.order-statuses.show', compact('order_status'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
		
        $order_status = OrderStatus::find($id);
		return view('backend.order-statuses.create', compact('order_status'));
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
		$order_status = OrderStatus::find($id);
		$order_status->update($data);
		
		return redirect(route('order-statuses.index'))->with('message', 'OrderStatus updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		$order_status = OrderStatus::find($id);
		$order_status->delete();
		return redirect()->back()->with('message', 'OrderStatus has been deleted');
    }
}
