<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Soal;
use App\JawabanSoal;

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
            'pertanyaan'    => $request->pertanyaan
        ]);

        JawabanSoal::create([
            'soal_id'       => $soal->id,
            'text_jawaban'  => $request->pilihan1,
            'correct'       => ($request->correct == 'a' ? '1' : '0')
        ]);
        JawabanSoal::create([
            'soal_id'       => $soal->id,
            'text_jawaban'  => $request->pilihan2,
            'correct'       => ($request->correct == 'b' ? '1' : '0')
        ]);
        JawabanSoal::create([
            'soal_id'       => $soal->id,
            'text_jawaban'  => $request->pilihan3,
            'correct'       => ($request->correct == 'c' ? '1' : '0')
        ]);
        JawabanSoal::create([
            'soal_id'       => $soal->id,
            'text_jawaban'  => $request->pilihan4,
            'correct'       => ($request->correct == 'd' ? '1' : '0')
        ]);

        return response()->json(['data' => 'success']);
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
