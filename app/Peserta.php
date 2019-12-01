<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
	protected $fillable = [
		'name_server','no_ujian','nama','password'
	];

}
