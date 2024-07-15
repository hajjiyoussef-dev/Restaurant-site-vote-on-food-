<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\chefmeals;

class ChefmealsController extends Controller
{
    public function store(Request $request)
    {
        
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'timechosse' => 'required|string' ,
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif',
        ]);

        try {
            // Save    to database
            $meal = new chefmeals();
            $meal->name = $request->input('name');
            $meal->description = $request->input('description');
            $meal->timechosse = $request->input('timechosse');
            // the photo logic
            $photoPath = $request->file('photo')->store('meal-photos');

            $meal->photo = $photoPath;

            $meal->save();

            return response()->json(['message' => 'Meal added successfully'], 201);
        } catch (\Exception $e) {
            // Handle any exceptions
            return response()->json(['message' => 'Error adding meal: ' . $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $meal = chefmeals::findOrFail($id);
            $meal->delete();

            return response()->json(['message' => 'Meal deleted successfully'], 200);
        } catch (\Exception $e) {
            
            return response()->json(['message' => 'Error deleting meal: ' . $e->getMessage()], 500);
        }
    }
    public function index(Request $request)
    {
        $timechosse = $request->query('timechosse');
    
        $query = chefmeals::query();
    
        if ($timechosse) {
            $query->where('timechosse', $timechosse);
        }
    
        $meals = $query->get();
    
        // Encode image data
        $meals->each(function ($meal) {
            $meal->photo = base64_encode(Storage::get($meal->photo));
        });
    
        return response()->json($meals);
    }
    
}
