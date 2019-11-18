<template>
	<div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    Tambah mata pelajaran
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Kode mapel</label>
                        <input type="text" class="form-control" placeholder="Kode mapel" name="">
                    </div>
                    <div class="form-group">
                        <label>Nama mapel</label>
                        <input type="text" class="form-control" placeholder="Nama mapel" name="">
                    </div>
                    <div class="form-group">
                        <b-button squared variant="primary">Simpan</b-button>
                    </div>
                </div>
                <div class="card-footer">
                </div>
            </div>
        </div>
    	<div class="col-lg-8">
    		<div class="card">
    			<div class="card-header">
                    List mata pelajaran
    			</div>
    			<div class="card-body">
    				<b-table striped hover bordered small :fields="fields" show-empty>
                       <template v-slot:cell(actions)="row">
                            <router-link :to="{ name: 'banksoals.soal', params: {id: row.item.id} }" class="btn btn-success btn-sm"><i class="cui-briefcase"></i></router-link>
                        </template>
                    </b-table>
    			</div> 
    		</div>
    	</div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'DataMatpel',
    created() {
        this.getMatpels()
    },
    data() {
        return {
            fields: [
                { key: 'kode_matpel', label: 'Kode matpel'},
                { key: 'nama', label: 'Nama mata pelajaran'},
                { key: 'actions', label: 'Aksi' }
            ],
            search: '',
        }
    },
    computed: {
        ...mapState('matpel', {
            matpels: state => state.matpels
        })
    },
    methods: {
        ...mapActions('matpel', ['getBanksoals'])
    }
      
}
</script>