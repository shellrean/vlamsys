<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					List jadwal
				</div>
				<div class="card-body">
					<b-table striped hover bordered :busy="isBusy" small :fields="fields" :items="ujians.data" show-empty>
						<template v-slot:table-busy>
                            <div class="text-center text-warning my-2">
							  <img src="/img/loader.svg" width="50px" />
                            </div>
                        </template>
						<template v-slot:cell(action)="row">
							<router-link :to="{ name: 'ujian.hasil.list', params: {'jadwal_id' : row.item.id} }" class="btn btn-sm btn-success rounded-0">
								Lihat hasil
							</router-link>
						</template>
                    </b-table>
                    <div class="row">
                        <div class="col-md-6">
                            <p v-if="ujians.data"><i class="fa fa-bars"></i> {{ ujians.data.length }} item dari {{ ujians.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
                                    v-model="page"
                                    :total-rows="ujians.meta.total"
                                    :per-page="ujians.meta.per_page"
                                    aria-controls="products"
                                    v-if="ujians.data && ujians.data.length > 0"
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
import { mapActions, mapState, mapMutations } from 'vuex'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

export default {
	name: 'DataUjian',
	components: {
	    datetime: Datetime
	},
	created() {
		this.getUjians()
	},
	data() {
		return {
			fields: [
				{ key: 'banksoal.kode_banksoal', label: 'Kode banksoal' },
				{ key: 'tanggal', label: 'Tanggal' },
				{ key: 'action', label: 'Aksi' }
			],
			search: '',
			isBusy: true
		}
	},
	computed: {
		...mapState(['errors']),
		...mapState('ujian', {
			ujians: state => state.ujians
		}),
		...mapState('banksoal', {
			banksoals: state => state.banksoals.data
		}),
		page: {
			get() {
				return this.$store.state.ujian.page
			},
			set(val) {
				this.$store.commit('ujian/SET_PAGE', val)
			}
		}
	},
	methods: {
		...mapActions('ujian', ['getUjians']),
		...mapMutations(['CLEAR_ERROR', 'SET_LOADING']),
	},
	watch: {
		page() {
			this.getUjians()
		},
		search() {
			this.getUjians(this.search)
		},
		ujians() {
			this.isBusy = false
		}
	}
}
</script>