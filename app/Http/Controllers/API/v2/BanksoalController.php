<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Banksoal;
use App\Directory;
use App\File;

use App\Http\Resources\AppCollection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

use PDF;

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

    public function getAll()
    {
        $user = request()->user('api'); 

        $banksoal = Banksoal::with(['matpel'])->orderBy('created_at', 'DESC');

        if ($user->role != 0) {
            $banksoal = $banksoal->where('author',$user->id);
        }

        $banksoal = $banksoal->get();
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
            'jumlah_pilihan'    => 'required|int',
        ]); 

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }

        $direk = Directory::create([
            'name'      => $request->kode_banksoal,
            'slug'      => Str::slug($request->kode_banksoal, '-')
        ]);

        $data = [
            'kode_banksoal'     => $request->kode_banksoal,
            'matpel_id'         => $request->matpel_id,
            'author'            => auth()->user()->id,
            'jumlah_soal'       => $request->jumlah_soal,
            'jumlah_pilihan'    => $request->jumlah_pilihan,
            'jumlah_soal_esay'  => $request->jumlah_soal_esay,
            'directory_id'      => $direk->id
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
        $banksoal = Banksoal::where('id',$id)->with('matpel')->first();

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
        $banksoal = Banksoal::find($id);
        $banksoal->kode_banksoal = $request->kode_banksoal;
        
        if(gettype($request->matpel_id) == 'array') {
            $banksoal->matpel_id = $request->matpel_id['id'];
        }

        $banksoal->jumlah_soal = $request->jumlah_soal;
        $banksoal->jumlah_soal_esay = $request->jumlah_soal_esay;
        $banksoal->save();

        return response()->json(['data' => $banksoal]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $banksoal = Banksoal::find($id);
        
        File::where('directory_id', $banksoal->directory_id)->delete();
        Directory::find($banksoal->directory_id)->delete();
        
        $banksoal->delete();

        return response()->json(['status' => 'success']);
    }

    /**
     *
     *
     * @param int $id
     */
    public function preBanksoal($id)
    {
        $banksoals = Banksoal::with(['pertanyaans','pertanyaans.jawabans'])->where('id', $id)->first();

        $pdf = PDF::loadview('prev.banksoal',compact('banksoals'));
        return $pdf->stream('laporan-pegawai.pdf');
    }
}
