<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Peserta;

use App\Http\Resources\AppCollection;
use Illuminate\Support\Facades\Validator;

class PesertaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $peserta = Peserta::orderBy('no_ujian');
        if (request()->q != '') {
            $peserta = $peserta->where('nama', 'LIKE', '%'.request()->q.'%');
        }

        $peserta = $peserta->paginate(10);
        return new AppCollection($peserta);
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
            'no_ujian'      => 'required|unique:pesertas,no_ujian',
            'nama'          => 'required',
            'password'      => 'required'
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = [
            'no_ujian'      => $request->no_ujian,
            'nama'          => $request->nama,
            'password'      => $request->password
        ];

        $data = Peserta::create($data);

        return response()->json(['data' => $data]);
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
        $peserta = Peserta::find($id);
        $peserta->delete();

        return response()->json(['status' => 'deleted']);
    }
}
