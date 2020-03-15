<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					Koreksi jawaban peserta
				</div>
				<div class="card-body">
					<b-table striped hover bordered :busy="isBusy" small :fields="fields" :items="banksoals" show-empty>
						<template v-slot:table-busy>
                            <div class="text-center text-warning my-2">
							  <img src="/img/loader.svg" width="50px" />
                            </div>
                        </template>
						<template v-slot:cell(aksi)="row">
							<b-button variant="light" size="sm" squared @click="submitNilai(row.index)">Koreksi banksoal ini</b-button>
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
	name: 'UjianKoreksi',
	created() {
		this.getExistsEsay()
	},
	data() {
		return {
			fields: [
				{ key: 'kode_banksoal', label: 'Banksoal' },
				{ key: 'koreksi', label: 'Jawaban belum terkoreksi' },
				{ key: 'aksi', label: 'Aksi' }
			],
			nilai: '',
			isBusy: true
		}
	},
	computed: {
		...mapState('ujian', {
			banksoals: state => state.ujians
		})
	},
	methods: {
		...mapActions('ujian', ['getJawabanEsay','submitNilaiEsay','getExistsEsay']),
		submitNilai(index) {
			this.submitNilaiEsay(this.essies.data[index])
			.then(() => {
				this.$notify({
		          group: 'foo',
		          title: 'Sukses',
		          type: 'success',
		          text: 'Nilai berhasil dikirim.'
		        })
			})
		} 
	},
	watch: {
		banksoals() {
			this.isBusy = false
		}
	}
}
</script>