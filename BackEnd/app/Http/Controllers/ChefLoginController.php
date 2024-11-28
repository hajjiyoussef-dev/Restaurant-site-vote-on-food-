<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Chef;

class ChefLoginController extends Controller
{
    public function Cheflogin(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (auth() -> guard('Chef')->attempt($credentials)) {
                return response()->json(['message' => 'Login successful'], 200);
        } else {
                return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }

    //the manuallogin method ;

    
//     public function manualLogin(Request $request)
//     {
        
//         $chef = chef::where('email', $request->email)->first();

        
//         \Log::debug('Retrieved chef: ' . json_encode($chef));

        
//         if ($chef && Hash::check($request->password, $chef->password)) {
            
//             return response('Login successful', 200);
//         } else {
            
//             return response('Invalid credentials', 401);
//         }
//     }
 }


