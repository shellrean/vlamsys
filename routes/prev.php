<?php

use Illuminate\Http\Request;

Route::group(['middleware' => 'auth.api'], function() {
	Route::get('tester', function() {
		return 'Oke';
	});
});