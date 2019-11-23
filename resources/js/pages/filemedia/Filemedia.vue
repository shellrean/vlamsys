<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					<b-button @click="$bvModal.show('modal-scoped')" variant="primary" squared>Buat direktori</b-button>
				</div>
				<div class="card-body">
					<b-list-group>
					  <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(directory,index) in directories" :key="index">
					    <router-link :to="{ name: 'filemedia.directory', params: { 'directory_id' : directory.id } }">{{ directory.name }}</router-link>
					  </b-list-group-item>
					</b-list-group>
				</div>
			</div>
		</div>
		<b-modal id="modal-scoped" hide-backdrop>
		    <template v-slot:modal-header="{ close }">
		      <h5>Buat direktori</h5>
		    </template>
		    <div class="form-group">
		    	<label>Nama direktori</label>
		    	<input type="text" placeholder="Nama direktori" class="form-control" v-model="data.nama_directory">
		    </div>
		    <template v-slot:modal-footer="{ ok, cancel}">
		      <b-button size="sm" variant="success" @click="postDirectory()">
		        Submit
		      </b-button>
		      <b-button size="sm" variant="secondary" @click="cancel()">
		        Cancel
		      </b-button>
		    </template>
		</b-modal>
	</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'


export default {
	name: 'DataDirectory',
	created() {
		this.getDirectories()
	},
	data() {
		return {
			data: {
				nama_directory: ''
			}
		}
	},
	computed: {
		...mapState('filemedia', {
			directories: state => state.directories.data
		})
	},
	methods: {
		...mapActions('filemedia',['getDirectories','addDirectory']),
		postDirectory() {
			this.addDirectory(this.data)
			.then(() => { this.getDirectories(),this.data.nama_directory = '' })
			this.$bvModal.hide('modal-scoped')
			this.$notify({
	          group: 'foo',
	          title: 'Sukses',
	          type: 'success',
	          text: 'Direktori berhasil ditambahkan.'
	        })
		}
	}
}
</script>