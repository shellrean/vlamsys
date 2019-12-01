<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Matpel;
use App\Banksoal;
use App\Soal;
use App\JawabanSoal;
use App\Jadwal;
use App\Peserta;

class PusatController extends Controller
{
    public function sinkron()
    {
    	$matpels = Matpel::all();
    	$banksoal = Banksoal::all();
    	$soal = Soal::all();
    	$jawaban = JawabanSoal::all();
        $jadwal = Jadwal::all();
        $peserta = Peserta::all();

    	$data = [
    		'status'		=> 'oke',
    		'matpels'		=> $matpels,
    		'banksoal'		=> $banksoal,
    		'soal'			=> $soal,
    		'jawaban'		=> $jawaban,
            'jadwal'        => $jadwal,
            'peserta'       => $peserta
    	];

    	return response()->json(['data' => $data]);
    }
}
