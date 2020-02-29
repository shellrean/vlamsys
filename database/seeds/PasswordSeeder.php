<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

use App\Server;

class PasswordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $servers = Server::all();

        foreach($servers as $server) {
            $db = DB::table('passwords')->where('server_name', $server->server_name)->first();
            if(!$db) {
                DB::table('passwords')->insert([
                    'server_name'   => $server->server_name,
                    'password'      => strtoupper(Str::random(6))
                ]);
            }
        }
    }
}
