<?php
namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Auth;
use Cookie;

class LoginController extends Controller
{
    use AuthenticatesUsers;
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
        $credentials = request(['username', 'password']);
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token =  $user->createToken('Personal Access Token')->accessToken;
            $cookie = $this->getCookieDetails($token);
            return response()
                ->json([
                    'status' => 'success',
                    'logged_in_user' => $user,
                    'token' => $token,
                ], 200)
                ->cookie($cookie['name'], $cookie['value'], $cookie['minutes'], $cookie['path'], $cookie['domain'], $cookie['secure'], $cookie['httponly'], $cookie['samesite']);
        } else {
            return response()->json(
                ['error' => 'invalid-credentials']);
        }
    }
    private function getCookieDetails($token)
    {
        return [
            'name' => '_token',
            'value' => $token,
            'minutes' => 1440,
            'path' => null,
            'domain' => null,
            // 'secure' => true, // for production
            'secure' => null, // for localhost
            'httponly' => true,
            'samesite' => true,
        ];
    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        $cookie = Cookie::forget('_token');
        return response()->json([
            'message' => 'successful-logout'
        ])->withCookie($cookie);
    }
}