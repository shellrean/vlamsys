<template>
	<div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <router-link :to="{ name: 'banksoal.data' }" class="btn btn-light btn-sm rounded-0">Kembali</router-link>
                    <router-link :to="{ name: 'banksoal.soal.tambah', params: { 'banksoal_id' : $route.params.banksoal_id } }" class="btn btn-primary btn-sm rounded-0">Tambah pertanyaan</router-link>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-5">
                            <h4 id="traffic" class="card-title mb-0">Manage Soal</h4>
                            <div class="small text-muted">Manage soal from banksoal</div>
                        </div>
                        <div class="d-none d-md-block col-sm-7">
                            <button type="button" class="btn float-right btn-primary btn-sm">
                                <font-awesome-icon icon="file-word" />
                            </button>
                            <button type="button" class="btn float-right btn-primary btn-sm mx-1">
                                <i class="cil-print"></i>
                            </button>
                        </div>
                    </div>
                    <br>
                    <b-table striped hover bordered small :fields="fields" :items="soals.data" show-empty>
                    	<template v-slot:cell(index)="data">
				        	{{ data.index + 1 }}
				      	</template>

                    	<template v-slot:cell(dibuat)="row">
                            {{ row.item.created_at }}
                        </template>
                        <template v-slot:cell(show_details)="row">
                            <b-button size="sm" @click="row.toggleDetails" :variant="row.detailsShowing ? 'danger' : 'info'"><i :class="row.detailsShowing ? 'cil-chevron-top' : 'cil-chevron-bottom'" /></b-button>
                        </template>
        				<template v-slot:row-details="row">
					        <b-card>
					          <div v-html="row.item.pertanyaan"></div>
					          <div v-if="row.item.audio != null"><audio-player :file="'/storage/audio/'+row.item.audio"></audio-player></div>
					          <table class="table">
					          	<tr v-for="jawab in row.item.jawabans">
                                    <td width="20px">
                                        <font-awesome-icon v-show="jawab.correct == '1'" icon="star" class="text-warning" />
                                    </td>
					          		<td>
					          			<div v-html="jawab.text_jawaban"></div>
					          		</td> 
					          	</tr>
					          </table>
					        </b-card>
					    </template>

                       <template v-slot:cell(actions)="row">
                            <router-link :to="{ name: 'banksoal.soal.edit', params: {soal_id: row.item.id, banksoal_id: row.item.banksoal_id} }" class="btn btn-sm btn-warning rounded-0">
                            	<f<i class="cil-pencil"></i> Edit
                            </router-link>
                            <button class="btn btn-danger btn-sm rounded-0" @click="deleteBanksoal(row.item.id)"><i class="cil-trash"></i>Hapus</button>
                        </template>
                    </b-table>
                    <div class="row">
                        <div class="col-md-6">
                            <p v-if="soals.data"><i class="fa fa-bars"></i> {{ soals.data.length }} item dari {{ soals.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
                                    size="sm"
                                    v-model="page"
                                    :total-rows="soals.meta.total"
                                    :per-page="soals.meta.per_page"
                                    aria-controls="products"
                                    v-if="soals.data && soals.data.length > 0"
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
import AudioPlayer from '../../components/AudioPlayer.vue'
export default {
	name: 'SoalBanksoal',
    components: {
        AudioPlayer
    },
	created() {
		this.getAllSoal()
	},
	data() {
		return {
			fields: [
				'index',
                { key: 'show_details', label: 'Detail'},
				{ key: 'dibuat', label: 'Dibuat pada'},
				{ key: 'actions', label: 'Aksi'}
			],
			search: '',
            isBusy: true
		}
	},
	computed: {
		...mapState('soal', {
			soals: state => state.soals
		}),
		page: {
			get() {
				return this.$store.state.soal.page
			},
			set(val) {
				this.$store.commit('soal/SET_PAGE',val)
			}
		}
	},
	methods: {
		...mapActions('soal',['getSoals','removeSoal']),
		getAllSoal() {
			this.getSoals({ banksoal_id: this.$route.params.banksoal_id })
            .then(() => {
                this.isBusy = false
            })
		},
		deleteBanksoal(id) {
			this.$swal({
                title: 'Kamu Yakin?',
                text: "Tindakan ini akan menghapus secara permanent!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya, Lanjutkan!'
            }).then((result) => {
                if (result.value) {
                    this.removeSoal(id)
                    this.getAllSoal()
                }
            })
		}
	},
	watch: {
        page() {
            this.getAllSoal()
        },
        search() {
            this.getAllSoal(this.search)
        }
    },
}
</script>