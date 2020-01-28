<?php

use Illuminate\Database\Seeder;

use App\User;
use App\Peserta;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' 		=> 'Shellrean Co',
            'username'  => 'Shellrean',
            'email' 	=> 'admin@shellrean.xyz',
            'email_verified_at' => now(),
            'password' 	=> bcrypt('secret'),
            'role' 		=> 0
        ]);
        User::create([
            'name'      => 'Uji coba admin',
            'username'  => 'ujicobaadmin',
            'email'     => 'ujicobaadmin@coba.com',
            'email_verified_at' => now(),
            'password'  => bcrypt('123'),
            'role'      => 0
        ]);

        User::create([
            'name'      => 'Uji coba guru',
            'username'  => 'ujicobaguru',
            'email'     => 'ujicobaguru@coba.com',
            'email_verified_at' => now(),
            'password'  => bcrypt('123'),
            'role'      => 1
        ]);
    }
}
