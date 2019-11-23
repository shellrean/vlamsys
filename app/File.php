<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = [
    	'filename','path','exstension','size','directory_id','dirname'
    ];
}
