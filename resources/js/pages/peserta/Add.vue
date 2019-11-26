<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
					<router-link :to="{ name: 'peserta.data' }" class="btn btn-warning btn-sm rounded-0">Kembali </router-link>
				</div>
				<div class="card-body">
					<peserta-form></peserta-form>
					<div class="form-group">
						<b-button squared variant="primary" @click="submit" :disabled="isLoading">
							<b-spinner small type="grow" v-show="isLoading"></b-spinner> Simpan
						</b-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import FormPeserta from './Form.vue'
export default {
	name: 'AddPeserta',
	data() {
		return {

		}
	},
	computed: {
		...mapGetters(['isLoading'])
	},
	methods: {
		...mapActions('peserta',['submitPeserta']),
		submit() {
			this.submitPeserta()
			.then(() => {
				this.$router.push({ name: 'peserta.data'})
			})
		}
	},
	components: {
		'peserta-form' : FormPeserta
	}
}
</script>