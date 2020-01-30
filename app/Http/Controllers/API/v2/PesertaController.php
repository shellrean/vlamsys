<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Peserta;
use App\Server;

use App\Http\Resources\AppCollection;
use Illuminate\Support\Facades\Validator;

use App\Imports\PesertaImport;
use Maatwebsite\Excel\Facades\Excel;

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

        if (request()->s != '') {
            $server = Server::where('sekolah_id',request()->s)->pluck('server_name');
            $peserta = $peserta->whereIn('name_server', $server);
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
            'server_name'   => 'required',
            'no_ujian'      => 'required|unique:pesertas,no_ujian',
            'nama'          => 'required',
            'password'      => 'required',
            'sesi'          => 'required',
            'jurusan_id'    => 'required'
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = [
            'name_server'   => $request->server_name,
            'no_ujian'      => $request->no_ujian,
            'nama'          => $request->nama,
            'password'      => $request->password,
            'sesi'          => $request->sesi,
            'jurusan_id'    => $request->jurusan_id
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

    /**
     * Upload peserta by excel
     *
     * @param \Illuminate\Http\Request  $request
     */
    public function import(Request $request)
    {
        Excel::import(new PesertaImport,$request->file('file'));

        return response()->json(['status' => 'OK']);
    }
}
