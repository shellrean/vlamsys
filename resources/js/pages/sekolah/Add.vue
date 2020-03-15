<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
					<router-link :to="{ name: 'sekolah.data' }" class="btn btn-light btn-sm">Kembali</router-link>
				</div>
				<div class="card-body">
					<sekolah-form></sekolah-form>
					<div class="form-group">
						<b-button variant="primary" @click="submit" size="sm" :disabled="isLoading">
							<b-spinner small type="grow" v-show="isLoading"></b-spinner>
							Simpan
						</b-button>
					</div>
				</div>
				<div class="card-footer">

				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import FormSekolah from './Form.vue'
export default {
	name: 'AddSekolah',
	computed: {
		...mapGetters(['isLoading'])
	},
	methods: {
		...mapActions('sekolah',['submitSekolah']),
		submit() {
			this.submitSekolah()
			.then(() => {
				this.$router.push({ name: 'sekolah.data' })
			})
		}
	},
	components: {
		'sekolah-form' : FormSekolah
	}
}
</script>