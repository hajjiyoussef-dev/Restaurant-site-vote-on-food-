<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Students; 

class StudentSignupController extends Controller
{
    public function signup(Request $request)
    {
      
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:students,email',
            'password' => 'required',
        ]);

        
        $student = Students::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            
  
        ]);
        return   response()->json(['message' => 'Student signup successful', 'student' => $student], 201);


    }
}
