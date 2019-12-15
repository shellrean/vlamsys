<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					Koreksi jawaban peserta
				</div>
				<div class="card-body">
					<b-table striped hover bordered :busy="isBusy" small :fields="fields" :items="essies.data" show-empty>
						<template v-slot:table-busy>
                            <div class="text-center text-warning my-2">
                              <b-spinner class="align-middle"></b-spinner>
                              <strong>Loading...</strong>
                            </div>
                        </template>
						<template v-slot:cell(pertanyaan)="row">
							<div v-html="row.item.pertanyaan.pertanyaan"></div>
						</template>
						<template v-slot:cell(jawaban)="row">
							<div v-html="row.item.txt_jawaban"></div>
						</template>
						<template v-slot:cell(nilai)="row">
							<input type="number" placeholder="Nilai" class="form-control rounded-0" v-model="row.item.nilai">
						</template>
						<template v-slot:cell(aksi)="row">
							<b-button variant="success" size="sm" squared @click="submitNilai(row.index)">Submit</b-button>
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
		this.getJawabanEsay()
	},
	data() {
		return {
			fields: [
				{ key: 'pertanyaan', label: 'Soal' },
				{ key: 'jawaban', label: 'Jawaban peserta' },
				{ key: 'nilai',label: 'Nilai' },
				{ key: 'aksi', label: 'Kirim' }
			],
			nilai: '',
			isBusy: true
		}
	},
	computed: {
		...mapState('ujian', {
			essies: state => state.essies
		})
	},
	methods: {
		...mapActions('ujian', ['getJawabanEsay','submitNilaiEsay']),
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
		essies() {
			this.isBusy = false
		}
	}
}
</script>