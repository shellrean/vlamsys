<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Directory extends Model
{
    protected $fillable = [
    	'name','slug'
    ];

    public function file()
    {
        return $this->hasMany(File::class);
    }
}
