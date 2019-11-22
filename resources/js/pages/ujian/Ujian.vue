<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					<button @click="$bvModal.show('modal-scoped')" class="btn btn-sm btn-primary rounded-0">Tambah</button>
				</div>
				<div class="card-body">
					<b-table striped hover bordered small :fields="fields" :items="ujians.data" show-empty>
						<template v-slot:cell(lama)="row">
							{{ parseInt(row.item.lama)/60+ " Menit" }}
						</template>
						<template v-slot:cell(status)="row">
							<i class="badge badge-success" v-show="row.item.status_ujian == 1">Aktif</i>
							<i class="badge badge-danger" v-show="row.item.status_ujian == 0">Non aktif</i>
						</template>
                    </b-table>
				</div>
			</div>
		</div>
		 <b-modal id="modal-scoped" size="lg" hide-backdrop>
		    <template v-slot:modal-header="{ close }">
		      <h5>Setting ujian</h5>
		    </template>
		    <div class="form-group">
		    	<label>Banksoal</label>
		    	<select class="form-control" :class="{ 'is-invalid' : errors.banksoal_id }" v-model="data.banksoal_id">
		    		<option v-for="banksoal in banksoals" :value="banksoal.id">{{ banksoal.kode_banksoal}} - {{ banksoal.matpel.nama }}</option>
		    	</select>
		    	<div class="invalid-feedback" v-if="errors.banksoal_id">{{ errors.banksoal_id[0] }}</div>
		    </div>
		    <div class="form-group">
		    	<label>Tanggal ujian</label>
		    	<datetime v-model="data.tanggal" input-class="form-control" :class="{ 'is-invalid' : errors.tanggal }"></datetime>
		    	<div class="invalid-feedback" v-if="errors.tanggal">{{ errors.tanggal[0] }}</div>
		    </div>
		    <div class="row">
		    	<div class="col-md-4">
		    		<div class="form-group">
				    	<label>Jam mulai</label>
				    	<datetime v-model="data.mulai" input-class="form-control" :class="{ 'is-invalid' : errors.mulai }" type="time"></datetime>
				    	<div class="invalid-feedback" v-if="errors.mulai">{{ errors.mulai[0] }}</div>
				    </div>
		    	</div>
		    	<div class="col-md-4">
					<div class="form-group">
				    	<label>Jam ditutup</label>
				    	<datetime v-model="data.berakhir" input-class="form-control" :class="{ 'is-invalid' : errors.berakhir }" type="time"></datetime>
				    	<div class="invalid-feedback" v-if="errors.berakhir">{{ errors.berakhir[0] }}</div>
				    </div>
		    	</div>
		    	<div class="col-md-4">
					<div class="form-gorup">
				    	<label>Durasi</label>
				    	<input type="number" class="form-control" :class="{ 'is-invalid' : errors.lama }" name="" placeholder="Menit" v-model="data.lama">
				    	<div class="invalid-feedback" v-if="errors.lama">{{ errors.lama[0] }}</div>
				    </div>
		    	</div>
		    </div>
		    <template v-slot:modal-footer="{ cancel }">
		      <b-button size="sm" variant="success" squared @click="postUjian">
		        Submit
		      </b-button>
		      <b-button size="sm" variant="secondary" squared @click="cancel()">
		        Cancel
		      </b-button>
		    </template>
		</b-modal>
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
		this.getBanksoals()
	},
	data() {
		return {
			fields: [
				{ key: 'banksoal.kode_banksoal', label: 'Kode banksoal' },
				{ key: 'tanggal', label: 'Tanggal' },
				{ key: 'mulai', label: 'Waktu mulai' },
				{ key: 'berakhir', label: 'Waktu berakhir' },
				{ key: 'lama', label: 'Durasi' },
				{ key: 'token', label: 'Token' },
				{ key: 'status', label: 'Status ujian' }
			],
			search: '',
			data: {
				mulai: '',
				berakhir: '',
				lama: '',
				tanggal: '',
				banksoal_id: '',
			}
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
		...mapActions('ujian', ['getUjians','addUjian']),
		...mapActions('banksoal', ['getBanksoals']),
		...mapMutations(['CLEAR_ERROR', 'SET_LOADING']),
		postUjian() {
			this.addUjian({
				banksoal_id: this.data.banksoal_id,
				mulai: this.data.mulai,
				berakhir: this.data.berakhir,
				lama: this.data.lama,
				tanggal: this.data.tanggal,
			})
			.then((response) => {
				this.$notify({
		          group: 'foo',
		          title: 'Sukses',
		          type: 'success',
		          text: 'Jadwal berhasil ditambahkan.'
		        }),
				this.getUjians()
				this.clearForm()
				this.$bvModal.hide('modal-scoped')
			})
		},
		clearForm() {
			this.data.banksoal_id = '',
			this.data.mulai = '',
			this.data.berakhir = '',
			this.data.lama = '',
			this.data.tanggal = ''
		}
	},
	watch: {
		page() {
			this.getUjians()
		},
		search() {
			this.getUjians(this.search)
		}
	}
}
</script>