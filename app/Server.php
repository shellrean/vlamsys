<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    protected $fillable = [
    	'server_name','description','serial_number','status','sinkron'
    ];
}
