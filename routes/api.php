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

Route::group(['middleware' => 'auth.api'], function() {

	Route::get('roles', 'API\v2\RolePermissionController@getAllRole')->name('roles');
	Route::get('permissions', 'API\v2\RolePermissionController@getallPermission')->name('permission');
	Route::post('role-permission', 'API\v2\RolePermissionController@getRolePermission')->name('role_permission');
	Route::post('set-role-permission', 'API\v2\RolePermissionController@setRolePermission')->name('set_role_permission');
	Route::post('set-role-user', 'API\v2\RolePermissionController@setRoleUser')->name('user.set_role');
	
	Route::get('user-authenticated', 'API\v2\UserController@getUserLogin')->name('user.authenticated');
	Route::get('user-lists', 'API\v2\UserController@userLists')->name('user.index');
	

	Route::get('/matpel/list', 'API\v2\MatpelController@getAll');
	Route::apiResource('/matpel', 'API\v2\MatpelController');

	Route::apiResource('/peserta', 'API\v2\PesertaController');
	Route::post('/peserta/upload', 'API\v2\PesertaController@import');

	Route::get('/banksoal/get-all', 'API\v2\BanksoalController@getAll');
	Route::get('/banksoal/active', 'Api\v2\BanksoalController@active');
	Route::apiResource('/banksoal', 'API\v2\BanksoalController');

	Route::resource('/soal', 'API\v2\SoalController');
	Route::get('/soal/banksoal/{id}', 'API\v2\SoalController@getSoalByBanksoal');
	Route::post('/soal/banksoal', 'API\v2\SoalController@storeSoalBanksoal');
	Route::post('/soal/banksoal/edit', 'API\v2\SoalController@updateSoalBanksoal');
	Route::delete('/soal/banksoal/{id}', 'API\v2\SoalController@destroySoalBanksoal');

	Route::apiResource('/ujian', 'API\v2\UjianController');
	Route::post('/ujian/set-status', 'API\v2\UjianController@setStatus');
	Route::post('/ujian/change-token', 'API\v2\UjianController@changeToken');
	Route::get('/ujian/get-peserta/{id}', 'API\v2\UjianController@getPeserta');
	Route::get('/ujian/hasil/{id}', 'API\v2\UjianController@getHasil');
	Route::post('/hasil/filter', 'API\v2\UjianController@getByFilter');
	Route::get('/ujian/esay/koreksi/{id}', 'API\v2\UjianController@getEsay');
	Route::post('/ujian/esay/input', 'API\v2\UjianController@inputEsay');
	Route::get('/ujian/banksoal/{id}', 'API\v2\UjianController@getByBanksoal');
	Route::get('/ujian/esay/exists', 'API\v2\UjianController@getExistsEsay');

	Route::apiResource('/directory', 'API\v2\DirectoryController');
	Route::post('/directory/filemedia', 'API\v2\DirectoryController@storeFilemedia');
	Route::post('/upload/file-audio', 'API\v2\DirectoryController@uploadAudio');
	Route::get('/directory/banksoal/{id}', 'API\v2\DirectoryController@getDirectoryBanksoal');

	Route::apiResource('/server','API\v2\ServerController');
	Route::post('/server/changed/{id}', 'API\v2\ServerController@changeStatus');
	Route::post('/server/reset-serial/{id}', 'API\v2\ServerController@resetSerial');

	Route::apiResource('/sekolah','API\v2\SekolahController');
	Route::get('/all-sekolah', 'API\v2\SekolahController@allSekolah');
	Route::get('/jurusan', 'API\v2\SekolahController@allJurusan');
});

Route::post('/pusat/test-sync', 'API\v2\PusatController@testSync');
Route::post('/pusat/sinkron', 'API\v2\PusatController@sinkron');
Route::post('/pusat/connect', 'API\v2\PusatController@connect');
Route::post('/pusat/register-server', 'API\v2\PusatController@registerServer');
Route::post('/pusat/upload-hasil', 'API\v2\PusatController@uploadHasil');
Route::post('/pusat/cbt-sync', 'API\v2\PusatController@cbtSync');
