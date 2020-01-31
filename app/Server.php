<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    protected $fillable = [
    	'server_name','description','serial_number','status','sinkron','sekolah_id'
    ];

    public function password()
    {
        return $this->belongsTo(Password::class,'server_name','server_name');
    }
}
