<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    protected $fillable = ['user_id', 'meal_id', 'time_chosen'];

    
    // public function students()
    // {
    //     return $this->belongsTo(students::class);
    // }

    // public function meal()
    // {
    //     return $this->belongsTo(chefmeals::class);
    // }
}
