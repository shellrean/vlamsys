<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Soal;
use App\JawabanSoal;

use DB;
use App\Http\Resources\AppCollection;
use Illuminate\Support\Facades\Validator;

class SoalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $soal = Soal::with('jawabans')->where(['id' => $id])->first();
        return response()->json(['data' => $soal]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Get soal by banksoal
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function getSoalByBanksoal($id)
    {
        $soal = Soal::with('jawabans')->where('banksoal_id',$id);
        if (request()->q != '') {
            $soal = $soal->where('kode_banksoal', 'LIKE', '%'. request()->q.'%');
        }

        $soal = $soal->paginate(10);

        // $soal = Soal::with('jawabans')->where('banksoal_id',$id)
        // ->orderBy(request()->sortby, request()->sortbydesc)
        // ->when(request()->q, function($soal) {
        //     $soal = $soal->where('pertanyaan', 'LIKE', '%' . request()->q . '%')
        //             ->orWhere('created_at', 'LIKE', '%' . request()->q . '%');
        // })->paginate(request()->per_page);

        return new AppCollection($soal);
    }

    /**
     * Store soal
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function storeSoalBanksoal(Request $request)
    {
        $soal = Soal::create([
            'banksoal_id'   => $request->banksoal_id,
            'pertanyaan'    => $request->pertanyaan,
            'tipe_soal'     => $request->tipe_soal,
            'audio'         => $request->audio
        ]);

        if($request->tipe_soal == 1) {
            foreach($request->pilihan as $key=>$pilihan) {
                JawabanSoal::create([
                    'soal_id'       => $soal->id,
                    'text_jawaban'  => $pilihan,
                    'correct'       => ($request->correct == $key ? '1' : '0')
                ]);
            }
        } 

        return response()->json(['data' => 'success']);
    }

    public function updateSoalBanksoal(Request $request) 
    {
        $soal = Soal::find($request->soal_id);
        $soal->pertanyaan = $request->pertanyaan;
        $soal->audio = $request->audio;
        $soal->save();

        if($request->tipe_soal == 1) {
            DB::table('jawaban_soals')->where('soal_id',$request->soal_id)->delete();
            foreach($request->pilihan as $key=>$pilihan) {
                JawabanSoal::create([
                    'soal_id'       => $soal->id,
                    'text_jawaban'  => $pilihan,
                    'correct'       => ($request->correct == $key ? '1' : '0')
                ]);
            }
        }
        return response()->json(['data' => 'updated']);
    }

    /**
     * Destroy soal
     *
     */
    public function destroySoalBanksoal($id)
    {
        $soal = Soal::find($id);
        $soal->delete();

        return response()->json(['data' => 'success']);
    }

}
