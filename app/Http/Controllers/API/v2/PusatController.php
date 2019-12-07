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
use App\Result;

class PusatController extends Controller
{
    // public function sinkron(Request $request)
    // {
    // 	$matpels = Matpel::all();

    // 	$banksoal = Banksoal::where([
    //         'server_name'   => $request->server_name
    //     ])->get();
    	
    //     $soal = Soal::all();
    // 	$jawaban = JawabanSoal::all();
    //     $jadwal = Jadwal::all();
    //     $directory = Directory::all();
    //     $files = File::all();

    //     $peserta = Peserta::where([
    //         'name_server'   => $request->server_name
    //     ])->get();

    // 	$data = [
    // 		'status'		=> 'oke',
    // 		'matpels'		=> $matpels,
    // 		'banksoal'		=> $banksoal,
    // 		'soal'			=> $soal,
    // 		'jawaban'		=> $jawaban,
    //         'jadwal'        => $jadwal,
    //         'peserta'       => $peserta,
    //         'directory'     => $directory,
    //         'files'         => $files
    // 	];

    //     $server = Server::where(['server_name' => $request->server_name])->first();
    //     $server->sinkron = 1;
    //     $server->save();

    // 	return response()->json(['data' => $data]);
    // }
    public function sinkron(Request $request)
    {
        $matpels = Matpel::all();

        $banksoal = Banksoal::where([
            'server_name'   => $request->server_name
        ])->get();

        switch ($request->req) {
            case 'peserta':
                $peserta = Peserta::where([
                    'name_server'   => $request->server_name
                ])->get();
                $data = [
                    'table' => 'pesertas',
                    'data'  => $peserta
                ];
                break;
            case 'matpel':
                $matpels = Matpel::all();
                $data = [
                    'table'  => 'matpels',
                    'data'   => $matpels   
                ];
                break;
            case 'banksoal':
                $banksoal = Banksoal::where([
                    'server_name'   => $request->server_name
                ])->get();
                $data = [
                    'table'  => 'banksoals',
                    'data'   => $banksoal   
                ];
                break;
            case 'soal':
                $soal = Soal::all();
                $data = [
                    'table'  => 'soals',
                    'data'   => $soal   
                ];
                break;
            case 'jawaban_soal':
                $jawaban_soal = JawabanSoal::all();
                $data = [
                    'table'  => 'jawaban_soals',
                    'data'   => $jawaban_soal   
                ];
                break;
            case 'jadwal':
                $jadwal = Jadwal::all();
                $data = [
                    'table'  => 'jadwals',
                    'data'   => $jadwal   
                ];
                break;
            case 'file': 
                $files = File::all();
                $data = [
                    'files'  => $files,
                ];
                break;
            default:
                echo 'oke';
        }
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

    public function uploadHasil(Request $request)
    {
        $output = json_decode($request->req, true);

        foreach($output as $o) {
            Result::create([
                'server_name'   => $request->server_name,
                'jadwal_id'     => $o['jadwal_id'],
                'salah'         => $o['hasil']['jumlah_salah'],
                'benar'         => $o['hasil']['jumlah_benar'],
                'kosong'        => $o['hasil']['tidak_diisi'],
                'hasil'         => $o['hasil']['hasil']
            ]);
        }

        return response()->json(['data' => 'OK']);
    }
}
