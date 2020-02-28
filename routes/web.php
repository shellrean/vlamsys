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

Route::get('prev/banksoal/{id}', 'API\v2\BanksoalController@preBanksoal');
Route::get('prev/ujian/hasil/{sekolah_id}/{banksoal_id}', 'API\v2\BanksoalController@resUjian');

Route::view('/{any}', 'index')->where('any','.*');