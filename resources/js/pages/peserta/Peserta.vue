<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
					<router-link :to="{ name: 'peserta.add' }" class="btn btn-primary btn-sm">Tambah peserta</router-link>
					<router-link :to="{ name: 'peserta.upload' }" class="btn btn-success btn-sm">Upload peserta</router-link>
					<div class="float-right">
                        <input type="text" class="form-control" placeholder="Cari nama..." v-model="search">
                    </div>
				</div>
				<div class="card-body">
					<div class="row">
                        <div class="col-sm-5">
                            <h4 id="traffic" class="card-title mb-0">Manage Peserta</h4>
                            <div class="small text-muted">Manage data peserta</div>
                        </div>
                        <div class="d-none d-md-block col-sm-7">
                            <button type="button" class="btn float-right btn-primary btn-sm mx-1">
                                <i class="cil-print"></i> Cetak data peserta
                            </button>
                        </div>
                    </div>
                    <br>
					<div class="row">
						<div class="col-sm-5">
							<div class="input-group mb-3">
								<select class="form-control" v-model="sekolah">
									<option v-for="sekolah in sekolahs.data" :value="sekolah.id" v-text="sekolah.nama" :key="sekolah.id"></option>
								</select>
								<div class="input-group-append">
									<button class="btn btn-outline-primary" type="button" @click="getDataPesertas">Tampilkan</button>
								</div>
							</div>
						</div>
					</div>
					<b-table striped hover bordered small :fields="fields" :items="pesertas.data" :busy="isBusy" show-empty v-show="pesertas.data">
						<template v-slot:cell(actions)="row">
							<b-button variant="danger" squared size="sm" @click="deletePeserta(row.item.id)">
								<font-awesome-icon icon="trash" /> Hapus
							</b-button>
						</template>
					</b-table>
					<div class="row" v-show="pesertas.data">
                        <div class="col-md-6">
                            <p v-if="pesertas.data"><i class="fa fa-bars"></i> {{ pesertas.data.length }} item dari {{ pesertas.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
								   size="sm"
                                    v-model="page"
                                    :total-rows="pesertas.meta.total"
                                    :per-page="pesertas.meta.per_page"
                                    aria-controls="pesertas"
                                    v-if="pesertas.data && pesertas.data.length > 0"
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
	name: 'DataPeserat',
	created() {
		// 
		this.getSekolah()
	},
	data() {
		return {
			fields: [
				{ key: 'name_server', label: 'Kode server ' },
				{ key: 'no_ujian', label: 'No ujian' },
				{ key: 'nama', label: 'Nama peserta' },
				{ key: 'actions', label: 'Aksi' }
			],
			search: '',
			isBusy: true,
			sekolah: ''
		}
	},
	computed: {
		...mapState('peserta', {
			pesertas: state => state.pesertas
		}),
		...mapState('sekolah', {
			sekolahs: state => state.sekolah
		}),
		page: {
			get() {
				return this.$store.state.peserta.page
			},
			set(val) {
				this.$store.commit('peserta/SET_PAGE', val)
			}
		}
	},
	methods: {
		...mapActions('peserta', ['getPesertas','removePeserta']),
		...mapActions('sekolah', ['getSekolah', ]),
		deletePeserta(id) {
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
		},
		getDataPesertas() {
			this.getPesertas({
				sekolah: this.sekolah
			})
		}
	},
	watch: {
		page() {
			this.getPesertas()
		},
		search() {
			this.getPesertas({
				search: this.search
			})
		},
		pesertas() {
			this.isBusy = false
		}
	}
}
</script>