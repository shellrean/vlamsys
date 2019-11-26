<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
					<router-link :to="{ name: 'peserta.add' }" class="btn btn-primary btn-sm rounded-0">Tambah peserta</router-link>
					<div class="float-right">
                        <input type="text" class="form-control" placeholder="Cari nama..." v-model="search">
                    </div>
				</div>
				<div class="card-body">
					<b-table striped hover bordered small :fields="fields" :items="pesertas.data" :busy="isBusy" show-empty>
						<template v-slot:cell(actions)="row">
							<b-button variant="danger" squared size="sm" @click="deletePeserta(row.item.id)">
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
	name: 'DataPeserat',
	created() {
		this.getPesertas()
	},
	data() {
		return {
			fields: [
				{ key: 'no_ujian', label: 'No ujian' },
				{ key: 'nama', label: 'Nama peserta' },
				{ key: 'actions', label: 'Aksi' }
			],
			search: '',
			isBusy: true
		}
	},
	computed: {
		...mapState('peserta', {
			pesertas: state => state.pesertas
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
		}
	},
	watch: {
		page() {
			this.getPesertas()
		},
		search() {
			this.getPesertas(this.search)
		},
		pesertas() {
			this.isBusy = false
		}
	}
}
</script>