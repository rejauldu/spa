<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'product_id', 'user_id', 'amount', 'created_by', 'accepted_by', 'note', 'updated_at', 'created_at'
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
    protected $casts = [
        'updated_at' => 'datetime',
		'created_at' => 'datetime',
    ];
    public function product() {
        return $this->belongsTo('App\Product');
    }
    public function user() {
        return $this->belongsTo('App\User');
    }
    public function creator() {
        return $this->belongsTo('App\User', 'created_by', 'id');
    }
    public function acceptor() {
        return $this->belongsTo('App\User', 'accepted_by', 'id');
    }
}
