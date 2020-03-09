<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
					<router-link :to="{ name: 'sekolah.add' }" class="btn btn-primary btn-sm">Tambah sekolah</router-link>
					<div class="float-right">
						<input type="text" class="form-control" placeholder="Cari sekolah..." v-model="search">
					</div>
				</div>
				<div class="card-body">
					<div class="row">
                        <div class="col-sm-5">
                            <h4 id="traffic" class="card-title mb-0">Manage Sekolah</h4>
                            <div class="small text-muted">Buat edit dan hapus sekolah</div>
                        </div>
                        <div class="d-none d-md-block col-sm-7">
                            <button type="button" class="btn float-right btn-primary btn-sm mx-1">
                                <i class="cil-print"></i>&nbsp; Cetak data sekolah
                            </button>
                        </div>
                    </div>
                    <br>
					<b-table striped hover bordered small :fields="fields" :items="sekolah.data" show-empty>
						<template v-slot:cell(show_details)="row">
                            <b-button size="sm" @click="row.toggleDetails" :variant="row.detailsShowing ? 'danger' : 'info'"><font-awesome-icon :icon="row.detailsShowing ? 'chevron-circle-up' : 'chevron-circle-down'" /></b-button>
                        </template>
						<template v-slot:row-details="row">
                            <b-card>
                                {{ row.item.alamat}}
                            </b-card>
                        </template>
						<template v-slot:cell(actions)="row">
							<router-link :to="{ name: 'sekolah.edit', params: { id: row.item.id } }" class="btn btn-warning btn-sm">
								<font-awesome-icon icon="edit" /> Edit
							</router-link>
							<b-button variant="danger" size="sm" @click="deleteSekolah(row.item.id)">
								<font-awesome-icon icon="trash" /> Hapus
							</b-button>
						</template>
					</b-table>
					<div class="row">
                        <div class="col-md-6">
                            <p v-if="sekolah.data"><i class="fa fa-bars"></i> {{ sekolah.data.length }} item dari {{ sekolah.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right" v-if="sekolah">
                                <b-pagination
								    size="sm"
                                    v-model="page"
                                    :total-rows="sekolah.meta.total"
                                    :per-page="sekolah.meta.per_page"
                                    aria-controls="products"
                                    v-if="sekolah.data && sekolah.data.length > 0 && sekolah.meta"
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
	name: 'DataSekolah',
	created() {
		this.getSekolah()
	},
	data() {
		return {
			fields: [
				{ key: 'show_details', label: 'Detail' },
				{ key: 'nis',label: 'No Induk sekolah' },
				{ key: 'nama', label: 'Nama sekolah' },
				{ key: 'actions', label: 'Aksi'}
			],
			search: '',
			isBusy: true
		}
	},
	computed: {
		...mapState('sekolah', {
			sekolah: state => state.sekolah
		}),
		page: {
			get() {
				return this.$store.state.sekolah.page
			},
			set(val) {
				this.$store.commit('sekolah/SET_PAGE', val)
			}
		}
	},
	methods: {
		...mapActions('sekolah', ['getSekolah','removeSekolah']),
		deleteSekolah(id) {
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
                    this.removeSekolah(id)
                }
            })
		}
	},
	watch: {
		page() {
			this.getSekolah()
		},
		search() {
			this.getSekolah(this.search)
		}
	}
}
</script>