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

use DB;

class PusatController extends Controller
{
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
                $jadwal = Jadwal::where('status_ujian',1)->get();
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
        $esay = json_decode($request->esay, true);

        foreach($output as $o) {
            Result::create([
                'server_name'   => $request->server_name,
                'jadwal_id'     => $o['jadwal_id'],
                'peserta_id'    => $o['peserta_id'],
                'salah'         => $o['hasil']['jumlah_salah'],
                'benar'         => $o['hasil']['jumlah_benar'],
                'kosong'        => $o['hasil']['tidak_diisi'],
                'hasil'         => $o['hasil']['hasil']
            ]);
        }

        foreach($esay as $e) {
            DB::table('result_esay')->insert([
                'banksoal_id'   => $e['banksoal_id'], 
                'soal_id'       => $e['soal_id'],
                'peserta_id'    => $e['peserta_id'],
                'jadwal_id'     => $e['jadwal_id'],
                'txt_jawaban'   => $e['jawab_essy']
            ]);
        }

        return response()->json(['data' => 'OK']);
    }

    public function testSync(Request $request)
    {
        $peserta = Peserta::where([
                    'name_server'   => $request->server_name
                ])->get()->count();
        $matpel = Matpel::all()->count();
        $banksoal = Banksoal::where([
            'server_name'   => $request->server_name
        ])->get()->count();

        $soal = Soal::all()->count();
        $jawaban = JawabanSoal::all()->count();
        $gambar = File::all()->count();
        $jadwal = Jadwal::where('status_ujian',1)->get()->count();

        $data = [
            'peserta'       => $peserta,
            'matpel'        => $matpel,
            'banksoal'      => $banksoal,
            'soal'          => $soal,
            'jawaban_soal'  => $jawaban,
            'gambar'        => $gambar,
            'jadwal'        => $jadwal,
        ];
        return response()->json(['data' => $data]);
    }

    public function cbtSync(Request $request )
    {
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
                $jadwal = Jadwal::where('status_ujian',1)->get();
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

        return response()->json($data);
    }
}
