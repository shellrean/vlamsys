<template>
	<div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <router-link :to="{ name: 'banksoal.data' }" class="btn btn-warning btn-sm rounded-0">Kembali</router-link>
                    <router-link :to="{ name: 'banksoal.soal.tambah', params: { 'banksoal_id' : $route.params.banksoal_id } }" class="btn btn-primary btn-sm rounded-0">Tambah</router-link>
                    <div class="float-right">
                        <input type="text" class="form-control" placeholder="Cari..." v-model="search">
                    </div>
                </div>
                <div class="card-body">
                    <b-table striped hover bordered small :fields="fields" :items="soals.data" show-empty>
                    	<template v-slot:cell(index)="data">
				        	{{ data.index + 1 }}
				      	</template>

                    	<template v-slot:cell(dibuat)="row">
                            {{ row.item.created_at }}
                        </template>
                        <template v-slot:cell(show_details)="row">
        					<b-button size="sm" squared @click="row.toggleDetails" class="mr-2">
          					{{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        					</b-button>
        				</template>
        				<template v-slot:row-details="row">
					        <b-card>
					          <div v-html="row.item.pertanyaan"></div>
					          
					          <table class="table">
					          	<tr v-for="jawab in row.item.jawabans">
					          		<td>
					          			<div v-html="jawab.text_jawaban"></div>
					          			<i v-show="jawab.correct == '1'" class="cui-star text-warning"></i>
					          		</td> 
					          	</tr>
					          </table>
					        </b-card>
					    </template>

                       <template v-slot:cell(actions)="row">
                            <button class="btn btn-danger btn-sm rounded-0" @click="deleteBanksoal(row.item.id)"><i class="cui-trash"></i></button>
                            <router-link :to="{ name: 'banksoal.soal.edit', params: {soal_id: row.item.id, banksoal_id: row.item.banksoal_id} }" class="btn btn-sm btn-success rounded-0">
                            	<i class="cui-pencil"></i>
                            </router-link>
                        </template>
                    </b-table>
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
				'index','show_details',
				{ key: 'dibuat', label: 'Dibuat pada'},
				{ key: 'actions', label: 'Aksi'}
			],
			search: ''
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
            this.getSoals()
        },
        search() {
            this.getSoals(this.search)
        }
    },
}
</script>