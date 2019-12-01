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
						<template v-slot:cell(show_details)="row">
                            <b-button size="sm" @click="row.toggleDetails" :variant="row.detailsShowing ? 'danger' : 'success'" squared><font-awesome-icon :icon="row.detailsShowing ? 'chevron-circle-up' : 'chevron-circle-down'" /></b-button>
                        </template>
                        <template v-slot:row-details="row">
                            <b-card>
                                <table class="table table-borderless">
                                    <tr>
                                        <td width="220px">Status sinkron</td><td v-text="(row.item.sinkron == '1' ? 'Berhasil' : 'Belum sinkron')"></td>
                                    </tr>
                                    <tr>
                                        <td>Status server</td><td v-text="(row.item.status == '1' ? 'Aktif' : 'Offline')"></td>
                                    </tr>
                                    <tr>
                                        <td>Serial number</td><td v-text="row.item.serial_number"></td>
                                    </tr>
                                </table>
                            </b-card>
                        </template>
						<template v-slot:cell(actions)="row">
							<b-button variant="danger" squared size="sm" @click="deleteServer(row.item.id)">
								<font-awesome-icon icon="trash" />
							</b-button>
						</template>
					</b-table>
					<div class="row">
                        <div class="col-md-6">
                            <p v-if="servers.data"><i class="fa fa-bars"></i> {{ servers.data.length }} item dari {{ servers.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
                                    v-model="page"
                                    :total-rows="servers.meta.total"
                                    :per-page="servers.meta.per_page"
                                    aria-controls="products"
                                    v-if="servers.data && servers.data.length > 0"
                                    ></b-pagination>
                            </div>
                        </div>
                    </div>
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
				{ key: 'show_details', label: 'Detail' },
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