<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    protected $fillable = [
    	'banksoal_id','lama','status_ujian','tanggal','mulai','berakhir', 'jadwal_id'
    ];

    protected $appends = [
    	'kode_banksoal'
    ];

    protected $hidden = [
    	'created_at','updated_at'
    ];

    protected $casts = [
    	'banksoal_id' => 'array'
    ];

    public function banksoal() 
    {
    	return $this->hasOne('App\Banksoal','id','banksoal_id');
    }

    public function getKodeBanksoalAttribute()
    {
    	$ids = array_column($this->banksoal_id, 'id');
    	return Banksoal::whereIn('id', $ids)->get()->pluck('kode_banksoal');
    }

}