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

                    	<template v-slot:cell(pertanyaan)="row">
                            {{ row.item.pertanyaan.substring(0,100)+".." }}
                        </template>
                        <template v-slot:cell(show_details)="row">
        					<b-button size="sm" squared @click="row.toggleDetails" class="mr-2">
          					{{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        					</b-button>
        				</template>
        				<template v-slot:row-details="row">
					        <b-card>
					          {{ row.item.pertanyaan }}
					          <ul>
					          	<li v-for="jawaban in row.item.jawabans">
					          		<b-card>
					          			{{ jawaban.text_jawaban }}
					        		</b-card>
					          	</li>
					          </ul>
					          
					        </b-card>
					    </template>

                       <template v-slot:cell(actions)="row">
                            <button class="btn btn-danger btn-sm rounded-0" @click="deleteBanksoal(row.item.id)"><i class="cui-trash"></i></button>
                            <router-link :to="{ name: 'banksoal.soal', params: {id: row.item.id} }" class></router-link>
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
				{ key: 'pertanyaan', label: 'Pertanyaan'},
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
		...mapActions('soal',['getSoals']),
		getAllSoal() {
			this.getSoals({ banksoal_id: this.$route.params.banksoal_id })
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