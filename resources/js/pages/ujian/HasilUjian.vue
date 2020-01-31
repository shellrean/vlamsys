<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					List jadwal
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-sm-5">
							<div class="input-group mb-3">
								<select class="form-control" v-model="banksoal">
									<option v-for="banksoal in banksoals" :key="banksoal.id" :value="banksoal.id" v-text="banksoal.kode_banksoal+'-'+banksoal.matpel.nama"></option>
								</select>
								<div class="input-group-append">
									<button class="btn btn-outline-primary" type="button" @click="getDataJadwals">Tampilkan</button>
								</div>
							</div>
						</div>
					</div>
					<b-table v-if="ujians && ujians.data" striped hover bordered :busy="isBusy" small :fields="fields" :items="ujians.data" show-empty>
						<template v-slot:cell(action)="row">
							<router-link :to="{ name: 'ujian.hasil.list', params: {'jadwal_id' : row.item.id} }" class="btn btn-sm btn-success rounded-0">
								Preview
							</router-link>
						</template>
                    </b-table>
					<div class="row" v-if="ujians && ujians.data">
                        <div class="col-md-6">
                            <p v-if="ujians.data"><i class="fa fa-bars"></i> {{ ujians.data.length }} item dari {{ ujians.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
                                    v-model="page"
                                    :total-rows="ujians.total"
                                    :per-page="ujians.per_page"
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
		this.getAllBanksoals()
	},
	data() {
		return {
			fields: [
				{ key: 'tanggal', label: 'Tanggal' },
				{ key: 'action', label: 'Aksi' }
			],
			search: '',
			isBusy: true,
			banksoal: ''
		}
	},
	computed: {
		...mapState(['errors']),
		...mapState('ujian', {
			ujians: state => state.ujians.data
		}),
		...mapState('banksoal', {
			banksoals: state => state.allBanksoals.data
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
		...mapActions('ujian', ['getUjianByBanksoal']),
		...mapActions('banksoal', ['getAllBanksoals']),
		...mapMutations(['CLEAR_ERROR', 'SET_LOADING']),
		getDataJadwals() {
			this.isBusy = true
			this.getUjianByBanksoal(this.banksoal)
			.then(() => {
				this.isBusy = false
			})
		}
	},
	watch: {
		page() {
			this.getUjianByBanksoal(this.banksoal)
		}
	}
}
</script>