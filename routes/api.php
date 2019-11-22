<?php

use Illuminate\Http\Request;

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

Route::post('/login', 'Auth\LoginController@login');

Route::group(['middleware' => 'auth:api'], function() {

	Route::get('/matpel/list', 'API\v2\MatpelController@getAll');
	Route::resource('/matpel', 'API\v2\MatpelController');


	Route::resource('/banksoal', 'API\v2\BanksoalController');

	Route::resource('/soal', 'API\v2\SoalController');
	Route::get('/soal/banksoal/{id}', 'API\v2\SoalController@getSoalByBanksoal');
	Route::post('/soal/banksoal', 'API\v2\SoalController@storeSoalBanksoal');
	Route::delete('/soal/banksoal/{id}', 'API\v2\SoalController@destroySoalBanksoal');

	Route::resource('/ujian', 'API\v2\UjianController');
	
});