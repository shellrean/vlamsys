<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'auth.api'], function() {
	Route::group(['namespace' => 'API\v2'], function() {
		Route::get('prev/banksoal/{id}', 'BanksoalController@preBanksoal');
		Route::get('prev/ujian/hasil/{sekolah_id}/{banksoal_id}', 'BanksoalController@resUjian');
		Route::get('prev/sekolah', 'SekolahController@preDataSekolah');
		Route::get('prev/server', 'ServerController@preDataServer');
	});
});

Route::view('/{any}', 'index')->where('any','.*');