<template>
	<div>
		<div class="form-group">
			<label>Server name</label>
			<input type="text" class="form-control" :class="{'is-invalid' : errors.server_name }" placeholder="Kode server" v-model="server.server_name">
			<p class="text-danger" v-if="errors.server_name">{{ errors.server_name[0] }}
			</p>
		</div>
		<div class="form-group">
			<label>Desripsi</label>
			<input type="text" class="form-control" :class="{ 'is-invalid' : errors.description }" placeholder="Deskripsi" v-model="server.description">
		</div>
	</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'FormServer',
	computed: {
		...mapState(['errors']),
		...mapState('server', {
			server: state => state.server
		})
	},
	methods: {
		...mapMutations('server',['CLEAR_FORM'])
	},
	destroyed() {
		this.CLEAR_FORM()
	}
}
</script>