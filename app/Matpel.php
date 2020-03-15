<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Matpel extends Model
{
    protected $fillable = [
    	'kode_mapel','nama','jurusan_id'
    ];    

    protected $casts = [
    	'jurusan_id' => 'array'
    ];
}
