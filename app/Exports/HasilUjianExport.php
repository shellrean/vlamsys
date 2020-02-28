<?php

namespace App\Exports;

use App\Result;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use DB;

class HasilUjianExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    protected $sekolah_id;
    protected $banksoal_id;

    function __construct($sekolah_id, $banksoal_id) {
        $this->sekolah_id = $sekolah_id;
        $this->banksoal_id = $banksoal_id;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $banksoal_id = $this->banksoal_id;
        $sekolah = $this->sekolah_id;

        $results = DB::table('results')
        ->join('pesertas', function($j) {
            $j->on('pesertas.id','results.peserta_id');
        })
        ->join('servers', function($j) {
            $j->on('servers.server_name','pesertas.name_server');
        })
        ->where('servers.sekolah_id', $sekolah)
        ->join('matpels', function($j) {
            $j->on('matpels.jurusan_id', 'pesertas.jurusan_id');
        })
        ->join('banksoals', function($j) use ($banksoal_id) {  
            $j->where('banksoals.id','=',$banksoal_id)
            ->on('banksoals.matpel_id', 'matpels.id');
        })
        ->select('pesertas.no_ujian','pesertas.nama','results.benar','results.salah','results.kosong','results.hasil')
        ->orderBy('pesertas.id')
        ->get();

        return $results;
    }
    public function headings(): array
    {
        return [
            'No Ujian',
            'Nama',
            'Benar',
            'Salah',
            'Kosong',
            'Hasil'
        ];
    }
}
