<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Banksoal;

use App\Http\Resources\AppCollection;
use Illuminate\Support\Facades\Validator;

class BanksoalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = request()->user('api'); 

        $banksoal = Banksoal::with(['matpel','user'])->orderBy('created_at', 'DESC');
        if (request()->q != '') {
            $banksoal = $banksoal->where('kode_banksoal', 'LIKE', '%'. request()->q.'%');
        }

        if ($user->role != 0) {
            $banksoal = $banksoal->where('author',$user->id);
        }

        $banksoal = $banksoal->paginate(10);
        return new AppCollection($banksoal);
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
            'kode_banksoal'     => 'required|unique:banksoals,kode_banksoal',
            'matpel_id'         => 'required|exists:matpels,id',
            'jumlah_soal'       => 'required|int',
            'jumlah_pilihan'    => 'required|int'
        ]); 

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }

        $data = [
            'kode_banksoal'     => $request->kode_banksoal,
            'matpel_id'         => $request->matpel_id,
            'author'            => auth()->user()->id,
            'jumlah_soal'       => $request->jumlah_soal,
            'jumlah_pilihan'    => $request->jumlah_pilihan
        ];

        $res = Banksoal::create($data);

        return response()->json(['data' => $res]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $banksoal = Banksoal::find($id);

        return response()->json(['data' => $banksoal]);
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
        $laundry = Banksoal::find($id);
        $laundry->delete();
        return response()->json(['status' => 'success']);
    }
}
