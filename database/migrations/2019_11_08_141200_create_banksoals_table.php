<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBanksoalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banksoals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('server_name');
            $table->string('kode_banksoal',50);
            $table->integer('jumlah_soal');
            $table->integer('jumlah_pilihan');
            $table->integer('jumlah_soal_esay');
            $table->unsignedBigInteger('matpel_id');
            $table->unsignedBigInteger('author');
            $table->foreign('author')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('matpel_id')->references('id')->on('matpels')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('banksoals');
    }
}
