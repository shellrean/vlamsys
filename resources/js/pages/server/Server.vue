<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
					<router-link :to="{ name: 'server.add' }" class="btn btn-primary btn-sm rounded-0">Tambah server</router-link>
					<div class="float-right">
                        <input type="text" class="form-control" placeholder="Cari nama..." v-model="search">
                    </div>
				</div>
				<div class="card-body">
					<b-table striped hover bordered small :fields="fields" :items="servers.data" :busy="isBusy" show-empty>
						<template v-slot:cell(actions)="row">
							<b-button variant="danger" squared size="sm" @click="deleteServer(row.item.id)">
								<font-awesome-icon icon="trash" />
							</b-button>
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
	name: 'DataServer',
	created() {
		this.getServers()
	},
	data() {
		return {
			fields: [
				{ key: 'server_name', label: 'Server name' },
				{ key: 'description', label: 'Keterangan' },
				{ key: 'actions', label: 'Aksi' }
			],
			search: '',
			isBusy: true
		}
	},
	computed: {
		...mapState('server', {
			servers: state => state.servers
		}),
		page: {
			get() {
				return this.$store.state.server.page
			},
			set(val) {
				this.$store.commit('server/SET_PAGE', val)
			}
		}
	},
	methods: {
		...mapActions('server', ['getServers','removeServer']),
		deleteServer(id) {
			this.$swal({
				title: 'Kamu Yakin?',
				text: 'Tindakan ini akan menghapus secara permanent!',
				type: 'warning',
				showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya, Lanjutkan!'
            }).then((result) => {
                if (result.value) {
                    this.removePeserta(id)
                }
            })
		}
	},
	watch: {
		page() {
			this.getServers()
		},
		search() {
			this.getServers(this.search)
		},
		pesertas() {
			this.isBusy = false
		}
	}
}
</script>