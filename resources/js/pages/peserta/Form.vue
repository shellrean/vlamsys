<template>
	<div>
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
	</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'FormPeserta',
	computed: {
		...mapState(['errors']),
		...mapState('peserta', {
			peserta: state => state.peserta
		})
	},
	methods: {
		...mapMutations('peserta',['CLEAR_FORM'])
	},
	destroyed() {
		this.CLEAR_FORM()
	}
}
</script>