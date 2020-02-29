<template>
	<div>
		<div class="form-group">
			<label>Kode matpel</label>
			<input type="text" class="form-control" :class="{ 'is-invalid' : errors.kode_matpel }" placeholder="Kode matpel" v-model="matpel.kode_mapel">
			<p class="text-danger" v-if="errors.kode_mapel">{{ errors.kode_mapel[0] }}</p>
		</div>
		<div class="form-group">
			<label>Nama matpel</label>
			<input type="text" class="form-control" :class="{ 'is-invalid' : errors.nama }" placeholder="Nama matpel" v-model="matpel.nama">
			<p class="text-danger" v-if="errors.nama">{{ errors.nama[0] }}</p>
		</div>
		<div class="form-group">
			<b-form-checkbox size="lg" v-model="produktif" value="1">Produktif</b-form-checkbox>
		</div>
		<div class="form-group" v-show="produktif">
			<label>Jurusan</label>
			<v-select label="nama" :options="jurusans.data" v-model="matpel.jurusan_id"></v-select>
		</div>
	</div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
	name: 'FormMatpel',
	created() {
		this.getJurusans()
	},
	data() {
		return {
			produktif: false,
			jurusan_id: 0
		}
	},
	components: {
    'v-select': vSelect
  },
	computed: {
		...mapState(['errors']),
		...mapState('matpel', {
			matpel : state => state.matpel
		}),
		...mapState('sekolah', {
			jurusans: state => state.jurusan
		})
	},
	methods: {
		...mapMutations('matpel', ['CLEAR_FORM']),
		...mapActions('sekolah',['getJurusans'])
	},
	destroyed() {
		this.CLEAR_FORM()
	}
}
</script>