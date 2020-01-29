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
        $vokasi = Peserta::where([
            'name_server' => $request->server_name
        ])->groupBy('jurusan_id')->pluck('jurusan_id');

        $banksoals = Banksoal::with(['matpel' => function($q) use($vokasi) {
            $q->whereIn('jurusan_id', $vokasi)
            ->orWhere('jurusan_id', 0);
        }])
        ->get();

        $banksoal = 0;
        $useBanksoal = array();
        foreach($banksoals as $b) {
            if($b->matpel != null) {
                $banksoal++;
                array_push($useBanksoal,$b->id);
            }
        }

        $soal = Soal::whereIn('banksoal_id', $useBanksoal);
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
                $matpels = DB::table('matpels')
                ->where('jurusan_id',0)
                ->orWhereIn('jurusan_id', $vokasi)
                ->get();
                $data = [
                    'table'  => 'matpels',
                    'data'   => $matpels   
                ];
                break;
            case 'banksoal':
                $data = [
                    'table'  => 'banksoals',
                    'data'   => $banksoals   
                ];
                break;
            case 'soal':
                $soals = $soal->get();
                $data = [
                    'table'  => 'soals',
                    'data'   => $soals
                ];
                break;
            case 'jawaban_soal':
                $jawaban_soal = JawabanSoal::whereIn('soal_id', $soal->pluck('id'))->count();
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
        $vokasi = Peserta::where([
            'name_server' => $request->server_name
        ])->groupBy('jurusan_id')->pluck('jurusan_id');

        $peserta = Peserta::where([
            'name_server'   => $request->server_name
        ])->get()->count();

        $matpel = DB::table('matpels')
        ->where('jurusan_id',0)
        ->orWhereIn('jurusan_id', $vokasi)
        ->get()->count();

        $banksoals = Banksoal::with(['matpel' => function($q) use($vokasi) {
            $q->whereIn('jurusan_id', $vokasi)
            ->orWhere('jurusan_id', 0);
        }])
        ->get();

        $banksoal = 0;
        $useBanksoal = array();
        foreach($banksoals as $b) {
            if($b->matpel != null) {
                $banksoal++;
                array_push($useBanksoal,$b->id);
            }
        }
        
        $soal = Soal::whereIn('banksoal_id', $useBanksoal);
        $countSoal = $soal->count();
        $jawaban = JawabanSoal::whereIn('soal_id', $soal->pluck('id'))->count();
        
        $gambar = File::all()->count();
        $jadwal = Jadwal::where('status_ujian',1)->get()->count();

        $data = [
            'peserta'       => $peserta,
            'matpel'        => $matpel,
            'banksoal'      => $banksoal,
            'soal'          => $countSoal,
            'jawaban_soal'  => $jawaban,
            'gambar'        => $gambar,
            'jadwal'        => $jadwal,
        ];
        return response()->json(['data' => $data]);
    }

    public function cbtSync(Request $request )
    {
        $vokasi = Peserta::where([
            'name_server' => $request->server_name
        ])->groupBy('jurusan_id')->pluck('jurusan_id');
        
        $banksoals = Banksoal::with(['matpel' => function($q) use($vokasi) {
            $q->whereIn('jurusan_id', $vokasi)
            ->orWhere('jurusan_id', 0);
        }])
        ->get();

        $banksoal = 0;
        $useBanksoal = array();
        foreach($banksoals as $b) {
            if($b->matpel != null) {
                $banksoal++;
                array_push($useBanksoal,$b->id);
            }
        }

        $banksoaler = Banksoal::whereIn('id',$useBanksoal)->get();

        $soal = Soal::whereIn('banksoal_id', $useBanksoal);

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
                $matpels = DB::table('matpels')
                ->where('jurusan_id',0)
                ->orWhereIn('jurusan_id', $vokasi)
                ->get();
                $data = [
                    'table'  => 'matpels',
                    'data'   => $matpels   
                ];
                break;
            case 'banksoal':
                $data = [
                    'table'  => 'banksoals',
                    'data'   => $banksoaler
                ];
                break;
            case 'soal':
                $soals = $soal->get();
                $data = [
                    'table'  => 'soals',
                    'data'   => $soals
                ];
                break;
            case 'jawaban_soal':
                $jawaban_soal = JawabanSoal::whereIn('soal_id', $soal->pluck('id'))->get();
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
        }

        return response()->json($data);
    }
}
