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
        //
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

}
