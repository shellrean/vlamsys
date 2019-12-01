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
use App\Server;

class PusatController extends Controller
{
    public function sinkron(Request $request)
    {
    	$matpels = Matpel::all();

    	$banksoal = Banksoal::where([
            'server_name'   => $request->server_name
        ])->get();
    	
        $soal = Soal::all();
    	$jawaban = JawabanSoal::all();
        $jadwal = Jadwal::all();

        $peserta = Peserta::where([
            'name_server'   => $request->server_name
        ])->get();

        // $peserta = Peserta::where(function ($q) {
        //     $q->where('name_server', $request->server_name)
        //         ->orWhere('name_server', 'All');
        // });

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

    public function connect(Request $request) 
    {
        $server = Server::where([
            'server_name'   => $request->server_name
        ])->first();

        if($server) {
            return response()->json(['data' => $server]);
        }
        return response()->json(['data' => 'unregistered']);
    }
}
