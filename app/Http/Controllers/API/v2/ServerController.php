<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Server;

use App\Http\Resources\AppCollection;
use Illuminate\Support\Facades\Validator;

class ServerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $server = Server::orderBy('created_at');
        if (request()->q != '') {
            $server = $server->where('name_server', 'LIKE', '%'.request()->q.'%');
        }

        $server = $server->paginate(10);
        return new AppCollection($server);
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
            'server_name'           => 'required|unique:servers,server_name',
            'description'            => 'required'
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = [
            'server_name'      => $request->server_name,
            'description'          => $request->description
        ];

        $data = Server::create($data);

        return response()->json(['data' => $data]);
    }
}
