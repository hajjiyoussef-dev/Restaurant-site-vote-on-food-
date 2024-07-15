<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Students;

class StudentLoginController extends Controller
{
    public function login(Request $request)
    {
        
        \Log::debug('Login attempt with credentials: ' . json_encode($request->only('email', 'password')));

        
        if (auth()->guard('web')->attempt($request->only('email', 'password'))) {
            
            return response('Login successful', 200);
        } else {
            
            return response('Invalid credentials', 401);
        }
    }

    //the manuallogin method 

    
    // public function manualLogin(Request $request)
    // {
        
    //     $student = Students::where('email', $request->email)->first();

        
    //     \Log::debug('Retrieved student: ' . json_encode($student));

        
    //     if ($student && Hash::check($request->password, $student->password)) {
            
    //         return response('Login successful', 200);
    //     } else {
            
    //         return response('Invalid credentials', 401);
    //     }
    // }
}
