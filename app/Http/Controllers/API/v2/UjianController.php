<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Jadwal;
use App\SiswaUjian;
use App\HasilUjian;
use App\Result;
use App\ResultEsay;
use App\Banksoal;
use App\Peserta;

use DB;
use App\Http\Resources\AppCollection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UjianController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ujian = Jadwal::with('banksoal')->orderBy('created_at', 'DESC');
        if (request()->q != '') {
            $ujian = $ujian->where('token', 'LIKE', '%'. request()->q.'%');
        }

        $ujian = $ujian->paginate(10);
        return new AppCollection($ujian);
    }

    public function getByBanksoal($id)
    {
        $rest = DB::table('jawaban_pesertas')
        ->where('jawaban_pesertas.banksoal_id', $id)
        ->join('jadwals', function($j) {
            $j->on('jawaban_pesertas.jadwal_id', 'jadwals.id');
        })
        ->groupBy('jadwals.id')
        ->select('jadwals.id')
        ->pluck('id');

        $ujian = Jadwal::whereIn('id', $rest)->paginate(10);

        return response()->json(['data' => $ujian]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            // 'banksoal_id'       => 'nullable|exists:banksoals,id',
            'tanggal'           => 'required',
            'mulai'             => 'required',
            'berakhir'          => 'required',
            'lama'              => 'required|int',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }
        $data = [
            'banksoal_id'       => ($request->banksoal_id != '' ? $request->banksoal_id : '0' ),
            'mulai'             => date('H:i:s', strtotime($request->mulai)),
            'berakhir'          => date('H:i:s',strtotime($request->berakhir)),
            'lama'              => $request->lama*60,
            'tanggal'           => date('Y-m-d',strtotime($request->tanggal)),
            'status_ujian'      => 0
        ];

        Jadwal::create($data);

        return response()->json(['data' => 'success']);
    }

    /**
     * Set status ujian.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function setStatus(Request $request)
    {
        $jadwal = Jadwal::find($request->id);
        $jadwal->status_ujian = $request->status;
        $jadwal->save();

        return response()->json(['status' => 'success']);
    }

    /**
     * Change token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function changeToken(Request $request)
    {
        $jadwal = Jadwal::find($request->id);
        $jadwal->token = strtoupper(Str::random(6));
        $jadwal->save();

        return response()->json(['data' => $jadwal]);
    }

    /**
     * Get all peserta by ujian
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function getPeserta($id)
    {
        $siswa = SiswaUjian::with('peserta')->where(['jadwal_id' => $id])->get();

        return response()->json(['data' => $siswa]);
    }

    public function getHasil($id)
    {
        $hasilPeserta = Result::with('peserta')->where(['jadwal_id' => $id])->get();

        return response()->json(['data' => $hasilPeserta]);
    }

    public function getEsay()
    {
        $esay = ResultEsay::with('pertanyaan')->where('see',0)->get();

        return response()->json(['data' => $esay]);
    }

    public function inputEsay(Request $request)
    {
        $jawab = ResultEsay::find($request->id);
        $jawab->nilai = $request->nilai;
        $jawab->see = 1;
        $jawab->save();

        return response()->json(['data' => 'OK']);
    }

    public function getByFilter(Request $request)
    {
        $reslt = Result::count();
        if($reslt == 0) {
            $ujian = Jadwal::where('status_ujian', 1)->first();
            $peserta = Peserta::all();
            foreach($peserta as $p) {
                $resl = DB::table('jawaban_pesertas')
                ->where('peserta_id', $p->id)
                ->count();
                if($resl == 0) {
                    continue;
                }
                $salah = DB::table('jawaban_pesertas')
                ->where([
                    'iscorrect' => 0,
                    'jadwal_id' => $ujian->id,
                    'peserta_id' => $p->id
                ])->get()->count();

                $benar = DB::table('jawaban_pesertas')
                ->where([
                    'iscorrect' => 1,
                    'jadwal_id' => $ujian->id,
                    'peserta_id' => $p->id
                ])->get()->count();

                $kosong = DB::table('jawaban_pesertas')
                ->where([
                    'jadwal_id' => $ujian->id,
                    'peserta_id' => $p->id,
                    'jawab'     => 0
                ])->get()->count();

                $jml = DB::table('jawaban_pesertas')
                ->where([
                    'jadwal_id' => $ujian->id,
                    'peserta_id' => $p->id
                ])->get()->count();
                

                $hasil = ($benar/$jml)*100;

                DB::table('results')
                ->insert([
                    'server_name'       => $p->name_server,
                    'peserta_id'        => $p->id,
                    'jadwal_id'         => $ujian->id,
                    'salah'             => $salah,
                    'benar'             => $benar,
                    'kosong'            => $kosong,
                    'hasil'             => $hasil
                ]);
            }
        }
        $banksoal_id = $request->banksoal;
        $results = DB::table('results')
        ->join('pesertas', function($j) {
            $j->on('pesertas.id','results.peserta_id');
        })
        ->join('servers', function($j) {
            $j->on('servers.server_name','pesertas.name_server');
        })
        ->where('servers.sekolah_id', $request->sekolah)
        ->join('matpels', function($j) {
            $j->on('matpels.jurusan_id', 'pesertas.jurusan_id');
        })
        ->join('banksoals', function($j) use ($banksoal_id) {  
            $j->where('banksoals.id','=',$banksoal_id)
            ->on('banksoals.matpel_id', 'matpels.id');
        })
        ->select('pesertas.nama','results.hasil','results.salah','results.benar','results.kosong')
        ->orderBy('pesertas.id')
        ->get();

        return response()->json(['data' => $results]);
    }
}
