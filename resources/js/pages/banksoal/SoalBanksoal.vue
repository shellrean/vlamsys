<template>
	<div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <router-link :to="{ name: 'banksoal.data' }" class="btn btn-warning btn-sm rounded-0">Kembali</router-link>
                    <router-link :to="{ name: 'banksoal.soal.tambah', params: { 'banksoal_id' : $route.params.banksoal_id } }" class="btn btn-primary btn-sm rounded-0">Tambah</router-link>
                </div>
                <div class="card-body">
                    <b-table striped hover bordered small :busy="isBusy" :fields="fields" :items="soals.data" show-empty>
                        <template v-slot:table-busy>
                            <div class="text-center text-warning my-2">
                              <b-spinner class="align-middle"></b-spinner>
                              <strong>Loading...</strong>
                            </div>
                        </template>
                    	<template v-slot:cell(index)="data">
				        	{{ data.index + 1 }}
				      	</template>

                    	<template v-slot:cell(dibuat)="row">
                            {{ row.item.created_at }}
                        </template>
                        <template v-slot:cell(show_details)="row">
                            <b-button size="sm" @click="row.toggleDetails" :variant="row.detailsShowing ? 'danger' : 'success'" squared><font-awesome-icon :icon="row.detailsShowing ? 'chevron-circle-up' : 'chevron-circle-down'" /></b-button>
                        </template>
        				<template v-slot:row-details="row">
					        <b-card>
					          <div v-html="row.item.pertanyaan"></div>
					          
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
                            <button class="btn btn-danger btn-sm rounded-0" @click="deleteBanksoal(row.item.id)"><font-awesome-icon icon="trash" /></button>
                            <router-link :to="{ name: 'banksoal.soal.edit', params: {soal_id: row.item.id, banksoal_id: row.item.banksoal_id} }" class="btn btn-sm btn-success rounded-0">
                            	<font-awesome-icon icon="edit" />
                            </router-link>
                        </template>
                    </b-table>
                    <div class="row">
                        <div class="col-md-6">
                            <p v-if="soals.data"><i class="fa fa-bars"></i> {{ soals.data.length }} item dari {{ soals.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
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

export default {
	name: 'SoalBanksoal',
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