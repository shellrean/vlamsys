<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card" v-if="!$role('school')">
				<div class="card-header">
					<router-link :to="{ name: 'server.add' }" class="btn btn-primary btn-sm">Tambah server</router-link>
				</div>
				<div class="card-body">
					<div class="row">
                        <div class="col-sm-5">
                            <h4 id="traffic" class="card-title mb-0">Manage Server</h4>
                            <div class="small text-muted">Manage servers</div>
                        </div>
                        <div class="d-none d-md-block col-sm-7">
                            <a :href="'/prev/server'" target="_blank" class="btn float-right btn-primary btn-sm mx-1">
                                <i class="cil-print"></i>
                                Cetak data servers
                            </a>
                        </div>
                    </div>
                    <br>
					<div class="row">
						<div class="col-sm-5">
							<div class="input-group mb-3">
								<select class="form-control" v-model="sekolah">
									<option v-for="sekolah in sekolahs.data" :key="sekolah.id" :value="sekolah.id" v-text="sekolah.nama"></option>
								</select>
								<div class="input-group-append">
									<button class="btn btn-outline-primary" type="button" @click="getDataServers">Tampilkan</button>
								</div>
							</div>
						</div>
					</div>
					<b-table striped hover bordered small :fields="fields" :items="servers.data" :busy="isBusy" show-empty v-show="servers.data">
						<template v-slot:cell(show_details)="row">
                           <b-button size="sm" @click="row.toggleDetails" :variant="row.detailsShowing ? 'danger' : 'info'"><i :class="row.detailsShowing ? 'cil-chevron-top' : 'cil-chevron-bottom'" /></b-button>
                        </template>
                        <template v-slot:row-details="row">
                            <b-card>
                                <table class="table table-borderless">
                                    <tr>
                                        <td width="220px">Status server</td><td v-text="(row.item.status == '1' ? 'Aktif' : 'Offline')"></td>
                                    </tr>
                                    <tr>
                                        <td>UUID</td><td v-text="row.item.serial_number"></td>
                                    </tr>
                                </table>
                            </b-card>
                        </template>
						<template v-slot:cell(actions)="row">
							<b-button variant="success" title="Aktif/Matikan server" size="sm" @click="reserveServer(row.item.id)">
								<font-awesome-icon icon="dot-circle" /> Aktif/Matikan
							</b-button>
							<b-button variant="warning" title="Hapus UUID" size="sm" @click="resetSerial(row.item.id)">
								<font-awesome-icon icon="sync" /> Reset UUID
							</b-button>
							<b-button variant="danger" title="Hapus server" size="sm" @click="deleteServer(row.item.id)">
								<i class="cil-trash"></i> Hapus
							</b-button>
						</template>
					</b-table>
					<div class="row" v-show="servers.data">
                        <div class="col-md-6">
                            <p v-if="servers.data"><i class="fa fa-bars"></i> {{ servers.data.length }} item dari {{ servers.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
								   size="sm"
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
				<div class="card-footer"></div>
			</div>
			<div class="card" v-if="$role('school')">
				<div class="card-header">
					Daftar server sekolah yang tersedia
				</div>
				<div class="card-body">
					<div class="row">
                        <div class="col-sm-5">
                            <h4 id="traffic" class="card-title mb-0">Manage Server</h4>
                            <div class="small text-muted">Manage servers</div>
                        </div>
                        <div class="d-none d-md-block col-sm-7">
                            <button type="button" class="btn float-right btn-primary btn-sm mx-1" @click="printServer">
                                <i class="cil-print"></i>&nbsp; Cetak data servers
                            </button>
                        </div>
                    </div>
                    <br>
					<b-table striped hover bordered small :fields="fields_school" :items="servers.data" :busy="isBusy" show-empty v-show="servers.data">
						<template v-slot:cell(actions)="row">
							<b-button variant="success" title="Aktif/Matikan server" size="sm" @click="reserveServer(row.item.id)">
								<font-awesome-icon icon="dot-circle" /> Aktif/Matikan
							</b-button>
							<b-button variant="warning" title="Hapus Serial" size="sm" @click="resetSerial(row.item.id)">
								<font-awesome-icon icon="sync" /> Reset UUID
							</b-button>
							<b-button variant="danger" title="Hapus server" size="sm" @click="deleteServer(row.item.id)">
								<font-awesome-icon icon="trash" /> Hapus
							</b-button>
						</template>
					</b-table>
					<div class="row" v-show="servers.data">
                        <div class="col-md-6">
                            <p v-if="servers.data"><i class="fa fa-bars"></i> {{ servers.data.length }} server dari {{ servers.meta.total }} total server</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
								   size="sm"
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
				<div class="card-footer">

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
		if(!this.$role('school')) {
			this.getAllSekolah()
		}
		if(this.$role('school')) {
			this.sekolah = this.$store.state.user.authenticated.sekolah_id
			this.getDataServers()
		}
	},
	data() {
		return {
			fields: [
				{ key: 'show_details', label: 'Detail' },
				{ key: 'server_name', label: 'Server name' },
				{ key: 'description', label: 'Keterangan' },
				{ key: 'password.password', label: 'Password'},
				{ key: 'actions', label: 'Aksi' }
			],
			fields_school: [
				{ key: 'server_name', label: 'Server name' },
				{ key: 'description', label: 'Keterangan' },
				{ key: 'password.password', label: 'Password'}
			],
			search: '',
			isBusy: true,
			sekolah: ''
		}
	},
	computed: {
		...mapState('server', {
			servers: state => state.servers
		}),
		...mapState('sekolah', {
			sekolahs: state => state.sekolah
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
		...mapActions('server', ['getServers','removeServer','revertServer','resetSerial']),
		...mapActions('sekolah', ['getAllSekolah', ]),
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
                    this.removeServer(id)
                }
            })
		},
		reserveServer($id) {
			this.revertServer($id)
			.then(() => {
				this.$notify({
                  group: 'foo',
                  title: 'Sukses',
                  type: 'success',
                  text: 'Status server changed.'
                })
			})
		},
		getDataServers() {
			this.getServers({
				sekolah: this.sekolah
			})
		},
		printServer() {
			this.$notify({
                  group: 'foo',
                  title: 'Information',
                  type: 'info',
                  text: 'This is future.'
            })
		}
	},
	watch: {
		page() {
			this.getServers({
				search: this.search,
				sekolah: this.sekolah
			})
		},
		search() {
			this.getServers({
				search: this.search
			})
		},
		pesertas() {
			this.isBusy = false
		}
	}
}
</script>