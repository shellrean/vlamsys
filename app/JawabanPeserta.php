<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JawabanPeserta extends Model
{
    protected $guarded = [];

    protected $hidden = [
    	'created_at','udpated_at'
    ];
}
