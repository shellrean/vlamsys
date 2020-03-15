<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
					<router-link :to="{ name: 'server.data' }" class="btn btn-light btn-sm">Kembali </router-link>
				</div>
				<div class="card-body">
					<server-form></server-form>
					<div class="form-group">
						<b-button variant="primary" @click="submit" size="sm" :disabled="isLoading">
							<b-spinner small type="grow" v-show="isLoading"></b-spinner> Simpan
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
import FormServer from './Form.vue'
export default {
	name: 'AddServer',
	data() {
		return {

		}
	},
	computed: {
		...mapGetters(['isLoading'])
	},
	methods: {
		...mapActions('server',['submitServer']),
		submit() {
			this.submitServer()
			.then(() => {
				this.$router.push({ name: 'server.data'})
			})
			.catch(() => {
				
			})
		}
	},
	components: {
		'server-form' : FormServer
	}
}
</script>