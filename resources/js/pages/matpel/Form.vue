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
	</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'FormMatpel',
	computed: {
		...mapState(['errors']),
		...mapState('matpel', {
			matpel : state => state.matpel
		})
	},
	methods: {
		...mapMutations('matpel', ['CLEAR_FORM'])
	},
	destroyed() {
		this.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Data mapel berhasil disimpan.'
        })
		this.CLEAR_FORM()
	}
}
</script>