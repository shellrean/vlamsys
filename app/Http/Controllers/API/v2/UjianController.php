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
use App\JawabanPeserta;

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
        $ujian = Jadwal::orderBy('created_at', 'DESC');
        if (request()->q != '') {
            $ujian = $ujian->where('token', 'LIKE', '%'. request()->q.'%');
        }
        $ujian = $ujian->paginate(10);
        $ujian->makeHidden('banksoal_id');
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
            'tanggal'           => 'required',
            'mulai'             => 'required',
            'berakhir'          => 'required',
            'lama'              => 'required|int',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }
        $data = [
            'mulai'             => date('H:i:s', strtotime($request->mulai)),
            'berakhir'          => date('H:i:s',strtotime($request->berakhir)),
            'lama'              => $request->lama*60,
            'tanggal'           => date('Y-m-d',strtotime($request->tanggal)),
            'status_ujian'      => 0
        ];

        if($request->banksoal_id != '') {
            $fill = array();
            foreach($request->banksoal_id as $banksol) {
                $fush = [
                    'id' => $banksol['id'],
                    'jurusan' => $banksol['matpel']['jurusan_id']
                ];
                array_push($fill, $fush);
            }   

            $data['banksoal_id'] = $fill;
        }

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

    public function getEsay($id)
    {
        $has = ResultEsay::where('banksoal_id', $id)->get()->pluck('jawab_id');
        $exists = JawabanPeserta::whereNotIn('id', $has)
        ->with(['pertanyaan' => function($q) {
            $q->select(['id','rujukan','pertanyaan']);
        }])
        ->where('banksoal_id', $id)
        ->paginate(10);

        return new AppCollection($exists);
    }

    public function inputEsay(Request $request)
    {
        $jawab = JawabanPeserta::find($request->id);

        $has = ResultEsay::where('banksoal_id', $jawab->banksoal_id)->get()->pluck('jawab_id');
        $sames = JawabanPeserta::whereNotIn('id',$has)
        ->where(['esay' => $jawab->esay, 'banksoal_id' => $jawab->banksoal_id, 'soal_id' => $jawab->soal_id])
        ->get();

        if($sames) {
            foreach($sames as $same) {
                ResultEsay::create([
                    'banksoal_id'   => $same->banksoal_id,
                    'peserta_id'    => $same->peserta_id,
                    'jawab_id'      => $same->id,
                    'point'         => $request->val
                ]);
            }

            return response()->json(['data' => 'OK1']);
        }

        ResultEsay::create([
            'banksoal_id'   => $jawab->banksoal_id,
            'peserta_id'    => $jawab->peserta_id,
            'jawab_id'      => $jawab->id,
            'point'         => $request->val
        ]);

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

    /**
     *
     */
    public function getExistsEsay()
    {
        $has = ResultEsay::all()->pluck('jawab_id')->unique();

        $exists = JawabanPeserta::whereNotNull('esay')
        ->whereNotIn('id', $has)
        ->get()
        ->pluck('banksoal_id')
        ->unique();

        $banksoal = Banksoal::whereIn('id', $exists)->get()
        ->makeHidden('jumlah_soal')
        ->makeHidden('jumlah_pilihan')
        ->makeHidden('matpel_id')
        ->makeHidden('directory_id')
        ->makeHidden('inputed')
        ->makeVisible('koreksi');

        return $banksoal;
    }
}
