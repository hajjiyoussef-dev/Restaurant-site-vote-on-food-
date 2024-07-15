<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vote;

class VoteController extends Controller
{
    public function registerVote(Request $request)
    {
        $validatedData = $request->validate([
            'userId' => 'required|integer',
            'mealId' => 'required|integer',
            'timeChosse' => 'required|string',
        ]);

        // Create a new vote record
        $vote = new Vote();
        $vote->user_id = $validatedData['userId'];
        $vote->meal_id = $validatedData['mealId'];
        $vote->time_chosen = $validatedData['timeChosse'];
        $vote->save();

        return response()->json(['message' => 'Vote registered successfully'], 200);
    }
}
