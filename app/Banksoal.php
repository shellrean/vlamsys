<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banksoal extends Model
{
    protected $fillable = [
		'server_name','kode_banksoal','kelas_id','author','matpel_id','jumlah_soal','jumlah_pilihan','jumlah_soal_esay'
	];

    public function pertanyaans()
    {
    	return $this->hasMany('App\Soal', 'banksoal_id','id');
    }

    public function matpel()
    {
    	return $this->belongsTo('App\Matpel','matpel_id');
    }

    public function user()
    {
    	return $this->belongsTo('App\User','author');
    }
}
