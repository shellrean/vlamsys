<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Matpel;
use App\Banksoal;
use App\Http\Resources\MatpelCollection;
use Illuminate\Support\Facades\Validator;

class MatpelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $matpels = Matpel::orderBy('created_at', 'DESC');
        if (request()->q != '') {
            $matpels = $matpels->where('nama', 'LIKE', '%'. request()->q.'%');
        }
        
        $matpels = $matpels->paginate(10);
        return new MatpelCollection($matpels);
    }

    /**
     * Get all matpel data from table
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
        $matpels = Matpel::orderBy('nama')->get();

        return response()->json(['data' => $matpels]);
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
            'kode_mapel'    => 'required|unique:matpels,kode_mapel',
            'nama'          => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }
        
        $data = [
            'kode_mapel'    => $request->kode_mapel,
            'nama'          => $request->nama,
            'jurusan_id' => ($request->jurusan_id != '' ? array_column($request->jurusan_id, 'id') : 0 ),
        ];
        

        $data = Matpel::create($data);


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
        $matpel = Matpel::find($id);

        return response()->json(['data' => $matpel]);
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
        $validator = Validator::make($request->all(), [
            'kode_mapel'    => 'required|unique:matpels,kode_mapel,'.$id,
            'nama'          => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }
        
        $data = [
            'kode_mapel'    => $request->kode_mapel,
            'nama'          => $request->nama,
            'jurusan_id' => ($request->jurusan_id != '' ? array_column($request->jurusan_id, 'id') : 0 ),
        ];
        
        $matpel = Matpel::find($id);

        $matpel->update($data);


        return response()->json(['data' => $data]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $banksoal = Banksoal::where('matpel_id', $id)->count();
        if($banksoal) {
            return response()->json(['message' => 'Ada banksoal yang menggunakan matpel ini'], 400);
        }
        $laundry = Matpel::find($id);
        $laundry->delete();
        return response()->json(['status' => 'success']);
    }

}
