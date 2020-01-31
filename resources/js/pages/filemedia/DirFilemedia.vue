<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					<router-link to="/filemedia" class="btn btn-warning btn-sm rounded-0">Kembali</router-link>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-sm-5">
							<div class="input-group">
							<div class="custom-file">
								<input type="file" class="custom-file-input" @change="onFileChange">
								<label class="custom-file-label">{{ label ? label : 'Pilih File...' }}</label>
							</div>
							<div class="input-group-append">
								<button class="btn btn-outline-primary" type="button" @click="uploadFile">Upload</button>
							</div>
							</div>
						</div>
					</div>
					<div class="row mt-2">
  						<div class="col-md-12">
  							<table class="table table-stipped table-hovered table-bordered">
  								<tr>
  									<td>link</td>
  									<td>view</td>
  									<td>Hapus</td>
  								</tr>
  								<tr v-for="content in contentDirectory.data">
  									<td>
  										<a :href="'/storage/'+content.dirname+'/'+content.filename" target="_blank">Link gambar</a>
  									</td>
  									<td>
  										<img :src="'/storage/'+content.dirname+'/'+content.filename" class="img-thumbnail" style="max-width: 50px">
  									</td>
  									<td>
  										<b-button variant="danger" squared size="sm" ><font-awesome-icon icon="trash" /> Hapus</b-button>
  									</td>
  								</tr>
  							</table>
  						</div>
  						<div class="col-md-12">
  							<div class="float-right">
  								<b-pagination
                                    v-model="page"
                                    :total-rows="contentDirectory.meta.total"
                                    :per-page="contentDirectory.meta.per_page"
                                    aria-controls="products"
                                    v-if="contentDirectory.data && contentDirectory.data.length > 0"
                                    ></b-pagination>
  							</div>
  						</div>
  					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
	created() {
		this.getContentFilemedia(this.$route.params.directory_id)
	},
	data() {
		return {
			label: '',
			image: '',
			isBusy: true
		}
	},
	computed: {
		...mapState('filemedia', {
			contentDirectory: state => state.contentFilemedia
		}),
		page: {
            get() {
                return this.$store.state.filemedia.page
            },
            set(val) {
                this.$store.commit('filemedia/SET_PAGE', val)
            }
        }
	},
	methods: {
		...mapActions('filemedia',['getContentFilemedia','addFilemedia']),
		onFileChange(e) {
			this.label = e.target.files[0].name
            this.image = e.target.files[0]
		},
		uploadFile() {
			let formData = new FormData()
			formData.append('directory_id', this.$route.params.directory_id)
            formData.append('image',this.image)
            this.addFilemedia(formData)
            .then(() => 
            	this.getContentFilemedia(this.$route.params.directory_id),
	            this.$notify({
		          group: 'foo',
		          title: 'Sukses',
		          type: 'success',
		          text: 'Filemedia berhasil ditambahkan.'
		        })
           	)
		}
	},
	watch: {
        page() {
            this.getContentFilemedia(this.$route.params.directory_id)
        },
        matpels() {
            this.isBusy = false
        }
    },
}
</script>