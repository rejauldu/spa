<?php

namespace App\Http\Services;

use Illuminate\Database\Eloquent\Builder;
use Auth;
use App\Stock;
use Carbon\Carbon;

class StockService
{
	public static function getStock() {
        $user = Auth::user();
        $stock = Stock::selectRaw('count(distinct product_id) as style, product_id')
            ->selectRaw('sum(case when user_id = '.$user->id.' then amount else -amount end) as quantity')
            ->selectRaw('sum(case when user_id = '.$user->id.' then amount end) as received')
            ->selectRaw('sum(case when created_by = '.$user->id.' then amount end) as sent')
            ->selectRaw('count(case when user_id = '.$user->id.' && accepted_by is null then 1 end) as incomplete')
            ->where(function($q) use($user) {
                $q->where('user_id', $user->id)
                    ->orWhere('created_by', $user->id);
            })->groupBy('product_id');
        $stock = $stock->first();
        return $stock;
	}
}
