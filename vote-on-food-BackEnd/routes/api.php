<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use App\Http\Controllers\StudentSignupController;
use App\Http\Controllers\StudentLoginController ;
use App\Http\Controllers\ChefLoginController ;
use App\Http\Controllers\ChefmealsController ;
use App\Http\Controllers\VotesController ;


Route::post('/signup', [StudentSignupController::class, 'signup']);
Route::post('/Student/login',[StudentLoginController::class,'login']);
Route::post('/chef/login', [ChefLoginController::class , 'Cheflogin']) ;
Route::post('/chef/meals',[ChefmealsController::class , 'store']);
Route::delete('/meals/{id}',[ChefmealsController::class , 'destroy']);
Route::get('view/meals',[ChefmealsController::class , 'index']) ;
Route::post('/votes', [VotesController::class, 'registerVote']); 
Route::get('/meals/{mealId}/vote-count', [VotesController::class, 'getMealVoteCount']); 



