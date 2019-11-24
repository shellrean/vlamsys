<?php

namespace App\Http\Controllers\API\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;

use App\Http\Resources\UserCollection;
use Spatie\Permission\Models\Permission;

class UserController extends Controller
{
    public function userLists()
    {
    	$user = User::where('role', '!=' ,3)->get();
    	return new UserCollection($user);
    }

    public function getUserLogin()
    {
    	$user = request()->user('api'); 
        $permissions = [];
        foreach (Permission::all() as $permission) {
            if (request()->user('api')->can($permission->name)) {
                $permissions[] = $permission->name;
            }
        }
        $user['permission'] = $permissions; 
        return response()->json(['status' => 'success', 'data' => $user]);
    }
}
