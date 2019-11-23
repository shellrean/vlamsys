<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					<router-link to="/filemedia" class="btn btn-warning btn-sm rounded-0">Kembali</router-link>
				</div>
				<div class="card-body">
					<div class="input-group">
					  <div class="custom-file">
					    <input type="file" class="custom-file-input" @change="onFileChange">
					    <label class="custom-file-label">{{ label ? label : 'Pilih File...' }}</label>
					  </div>
					  <div class="input-group-append">
					    <button class="btn btn-outline-primary" type="button" @click="uploadFile">Upload</button>
					  </div>
					</div>
					<div class="row mt-2"> 
  						<div class="col-md-1" v-for="content in contentDirectory.data">
  							<img :src="'/storage/'+content.dirname+'/'+content.filename" class="img-thumbnail">
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
			image: ''
		}
	},
	computed: {
		...mapState('filemedia', {
			contentDirectory: state => state.contentFilemedia.data
		})
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
	}
}
</script>