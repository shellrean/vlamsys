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
use App\Directory;
use App\File;

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
        $directory = Directory::all();
        $files = File::all();

        $peserta = Peserta::where([
            'name_server'   => $request->server_name
        ])->get();

    	$data = [
    		'status'		=> 'oke',
    		'matpels'		=> $matpels,
    		'banksoal'		=> $banksoal,
    		'soal'			=> $soal,
    		'jawaban'		=> $jawaban,
            'jadwal'        => $jadwal,
            'peserta'       => $peserta,
            'directory'     => $directory,
            'files'         => $files
    	];

        $server = Server::where(['server_name' => $request->server_name])->first();
        $server->sinkron = 1;
        $server->save();

    	return response()->json(['data' => $data]);
    }

    public function connect(Request $request) 
    {
        $server = Server::where([
            'server_name'   => $request->server_name
        ])->first();

        if($server) {
            if($server->serial_number != $request->serial_number) {
                return response()->json(['data' => 'block']);
            }
            return response()->json(['data' => $server]);
        }
        return response()->json(['data' => 'unregistered']);
    }

    public function registerServer(Request $request) 
    {
        $server = Server::where(['server_name' => $request->server_name])->first();
        if($server->serial_number != '-') {
            return response()->json(['status' => 'error']);
        }

        $server->serial_number = $request->serial_number;
        $server->save();

        return response()->json(['status' => 'success']);
    }   
}
