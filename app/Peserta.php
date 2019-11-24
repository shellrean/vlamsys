<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
    protected $hidden = [
    	'api_token','password'
    ];
}
