<template>
	<div>
		<div class="form-group">
			<label>Server</label>
			<v-select label="server_name" :options="servers.data" v-model="peserta.server_name" :reduce="server_name => server_name.server_name"></v-select>
			<p class="text-danger" v-if="errors.server_name">{{ errors.server_name[0] }}
			</p>
		</div>
		<div class="form-group">
			<label>Sesi</label>
			<input type="number" min="1" class="form-control" :class="{'is-invalid' : errors.sesi }" placeholder="Sesi ujian" v-model="peserta.sesi">
			<p class="text-danger" v-if="errors.sesi">{{ errors.sesi[0] }}
			</p>
		</div>
		<div class="form-group">
			<label>No ujian</label>
			<input type="text" class="form-control" :class="{'is-invalid' : errors.no_ujian }" placeholder="No ujian" v-model="peserta.no_ujian">
			<p class="text-danger" v-if="errors.no_ujian">{{ errors.no_ujian[0] }}
			</p>
		</div>
		<div class="form-group">
			<label>Nama peserta</label>
			<input type="text" class="form-control" :class="{ 'is-invalid' : errors.nama }" placeholder="Nama peserta" v-model="peserta.nama">
		</div>
		<div class="form-group">
			<label>Password</label>
			<input type="text" class="form-control" :class="{ 'is-invalid' : errors.password }" placeholder="Password" v-model="peserta.password">
		</div>
		<div class="form-group">
			<label>Jurusan</label>
			<select class="form-control" v-model="peserta.jurusan_id">
				<option value="0">Pilih</option>
				<option value="1">Teknik Komputer & Jaringan</option>
				<option value="2">Akuntansi Keuangan Lembaga</option>
			</select>
		</div>
	</div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
	name: 'FormPeserta',
	components: {
        'v-select': vSelect
    },
    created() {
    	this.getServers()
    },
	computed: {
		...mapState(['errors']),
		...mapState('peserta', {
			peserta: state => state.peserta
		}),
		...mapState('server', {
			servers: state => state.servers
		}),
	},
	methods: {
		...mapActions('server', ['getServers']),
		...mapMutations('peserta',['CLEAR_FORM'])
	},
	destroyed() {
		this.CLEAR_FORM()
	}
}
</script>