<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Process the login user.
     *
     * @param Reqeust
     */
    public function login(Request $request)
    {
        $this->validate($request, [
            'email'        => 'required|email',
            'password'     => 'required'
        ]);

        $auth = $request->except(['remember_me']);
        if (auth()->attempt($auth, $request->remember_me)) {
            auth()->user()->update(['api_token' => Str::random(81)]);
            return response()->json(['status' => 'success', 'data' => auth()->user()->api_token],200);
        }

        return response()->json(['status' => 'failed']);
    }
}
