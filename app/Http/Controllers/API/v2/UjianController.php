<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Jadwal;
use App\SiswaUjian;
use App\HasilUjian;
use App\Result;
use App\ResultEsay;

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
}
