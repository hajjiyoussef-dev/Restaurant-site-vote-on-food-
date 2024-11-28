<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ChefTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('chef')->insert([
            'email' => "1337Food@gmail.com",
            'password' => Hash::make("1337food"),
            
        ]);

        
    }
}
