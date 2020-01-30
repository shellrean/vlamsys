<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
					<router-link :to="{ name: 'sekolah.add' }" class="btn btn-primary btn-sm rounded-0">Tambah sekolah</router-link>
					<div class="float-right">
						<input type="text" class="form-control" placeholder="Cari sekolah..." v-model="search">
					</div>
				</div>
				<div class="card-body">
					<b-table striped hover bordered small :fields="fields" :items="sekolah.data" show-empty>
						<template v-slot:cell(actions)="row">
							<router-link :to="{ name: 'sekolah.edit', params: { id: row.item.id } }" class="btn btn-warning btn-sm rounded-0">
								<font-awesome-icon icon="edit" /> Edit
							</router-link>
							<b-button variant="danger" squared size="sm" @click="deleteSekolah(row.item.id)">
								<font-awesome-icon icon="trash" /> Hapus
							</b-button>
						</template>
					</b-table>
					<div class="row">
                        <div class="col-md-6">
                            <p v-if="sekolah.data"><i class="fa fa-bars"></i> {{ sekolah.data.length }} item dari {{ sekolah.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
                                    v-model="page"
                                    :total-rows="sekolah.meta.total"
                                    :per-page="sekolah.meta.per_page"
                                    aria-controls="products"
                                    v-if="sekolah.data && sekolah.data.length > 0"
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
				{ key: 'nis',label: 'No Induk sekolah' },
				{ key: 'nama', label: 'Nama sekolah' },
				{ key: 'alamat', label: 'Alamat' },
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
				return this.$store.state.server.page
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