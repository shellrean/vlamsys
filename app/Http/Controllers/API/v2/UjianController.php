<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Jadwal;

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
            'banksoal_id'       => 'required|exists:banksoals,id',
            'tanggal'           => 'required',
            'mulai'             => 'required',
            'berakhir'          => 'required',
            'lama'              => 'required|int',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }
        $data = [
            'banksoal_id'       => $request->banksoal_id,
            'mulai'             => date('H:i:s', strtotime($request->mulai)),
            'berakhir'          => date('H:i:s',strtotime($request->berakhir)),
            'lama'              => $request->lama*60,
            'tanggal'           => date('Y-m-d',strtotime($request->tanggal)),
            'token'             => strtoupper(Str::random(6)),
            'status_ujian'      => 0
        ];

        Jadwal::create($data);

        return response()->json(['data' => 'success']);
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

    public function setStatus(Request $request)
    {
        $jadwal = Jadwal::find($request->id);
        $jadwal->status_ujian = $request->status;
        $jadwal->save();

        return response()->json(['status' => 'success']);
    }
}
