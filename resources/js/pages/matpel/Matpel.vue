<template>
	<div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    Tambah mata pelajaran
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Kode mapel</label>
                        <input type="text" class="form-control" placeholder="Kode mapel" v-model="data.kode_mapel">
                        <p class="text-danger" v-if="errors.kode_mapel">{{ errors.kode_mapel[0] }}</p>
                    </div>
                    <div class="form-group">
                        <label>Nama mapel</label>
                        <input type="text" class="form-control" placeholder="Nama mapel" v-model="data.nama">
                        <p class="text-danger" v-if="errors.nama">{{ errors.nama[0] }}</p>
                    </div>
                    <div class="form-group">
                        <b-button squared variant="primary" @click="postMatpel" :disabled="isLoading">
                        <b-spinner small type="grow" v-show="isLoading"></b-spinner>Simpan</b-button>
                    </div>
                </div>
                <div class="card-footer">
                </div>
            </div>
        </div>
    	<div class="col-lg-8">
    		<div class="card">
    			<div class="card-header">
                    List mata pelajaran
    			</div>
    			<div class="card-body">
    				<b-table striped hover bordered :busy="isBusy" small :fields="fields" :items="matpels.data" show-empty>
                        <template v-slot:table-busy>
                            <div class="text-center text-warning my-2">
                              <b-spinner class="align-middle"></b-spinner>
                              <strong>Loading...</strong>
                            </div>
                        </template>
                       <template v-slot:cell(actions)="row">
                            <button class="btn btn-danger btn-sm rounded-0" @click="deleteMatpel(row.item.id)"><font-awesome-icon icon="trash" /></button>
                        </template>
                    </b-table>
                    <div class="row">
                        <div class="col-md-6">
                            <p v-if="matpels.data"><i class="fa fa-bars"></i> {{ matpels.data.length }} item dari {{ matpels.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
                                    v-model="page"
                                    :total-rows="matpels.meta.total"
                                    :per-page="matpels.meta.per_page"
                                    aria-controls="products"
                                    v-if="matpels.data && matpels.data.length > 0"
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
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'

export default {
    name: 'DataMatpel',
    created() {
        this.getMatpels()
    },
    data() {
        return {
            fields: [
                { key: 'kode_mapel', label: 'Kode matpel'},
                { key: 'nama', label: 'Nama mata pelajaran'},
                { key: 'actions', label: 'Aksi' }
            ],
            search: '',
            data: {
                nama: '',
                kode_mapel: ''
            },
            isBusy: true
        }
    },
    computed: {
        ...mapGetters(['isLoading']),
        ...mapState(['errors']),
        ...mapState('matpel', {
            matpels: state => state.matpels
        }),
        page: {
            get() {
                return this.$store.state.matpel.page
            },
            set(val) {
                this.$store.commit('matpel/SET_PAGE', val)
            }
        }
    },
    methods: {
        ...mapActions('matpel', ['getMatpels','addMatpel','removeMatpel']),
        ...mapMutations(['CLEAR_ERRORS','SET_LOADING']),
        postMatpel() {
            this.SET_LOADING(true)
            this.addMatpel(this.data).then( (data) => {
                this.$notify({
                  group: 'foo',
                  title: 'Sukses',
                  type: 'success',
                  text: 'Matpel berhasil ditambah.'
                })
                this.SET_LOADING(false)
                this.getMatpels()  
            })
        },
        deleteMatpel(id) {
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
                    this.removeMatpel(id)
                    this.getMatpels()
                }
            })
        }
    },
    watch: {
        page() {
            this.getMatpels()
        },
        search() {
            this.getMatpels(this.search)
        },
        matpels() {
            this.isBusy = false
        }
    },
}
</script>