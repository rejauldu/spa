<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promo extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'promo', 'reusable', 'created_for_user', 'percent', 'is_active', 'valid_from', 'valid_until', 'updated_at', 'created_at'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'valid_from' => 'datetime',
        'valid_until' => 'datetime',
        'updated_at' => 'datetime',
        'created_at' => 'datetime',
    ];

    public function user() {
        return $this->belongsTo('App\User', 'created_for_user', 'id');
    }
}
