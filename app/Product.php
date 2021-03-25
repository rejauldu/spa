<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'style_number', 'name', 'description', 'supplier_id', 'category_id', 'quantity_per_unit', 'msrp', 'size_id', 'color_id', 'discount', 'weight', 'stock', 'unit_id', 'unit_on_order', 'reorder_level', 'is_available', 'discount_available', 'picture', 'image1', 'image2', 'image3', 'image4', 'ranking', 'note', 'view', 'deleted_at', 'created_at', 'updated_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */

	public function category() {
        return $this->belongsTo('App\Category');
    }
	public function supplier() {
		return $this->belongsTo('App\User', 'supplier_id', 'id');
	}
	public function comments() {
		return $this->hasMany('App\Comment');
	}
	public function reviews() {
		return $this->hasMany('App\Review');
	}
	public function order_details() {
		return $this->hasMany('App\OrderDetail');
	}
    public function size() {
        return $this->belongsTo('App\Size');
    }
    public function color() {
        return $this->belongsTo('App\Color');
    }
    public static function increase($id, $amount) {
        $product = Product::find($id);
        $product->update(['amount' => $product->stock+$amount]);
    }
}
