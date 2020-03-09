<?php

use Illuminate\Database\Seeder;

use App\User;
use App\Sekolah;
class SchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $school = Sekolah::all();
        foreach($school as $scho) {
            User::create([
                'name'  => $scho->nama,
                'username' => $scho->nis,
                'email' => $scho->nis.'@shellrean.com',
                'password' => bcrypt($scho->nis),
                'sekolah_id' => $scho->id,
                'role' => 1
            ]);
        }
    }
}
