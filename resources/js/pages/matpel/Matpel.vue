<template>
	<div class="row">
    	<div class="col-md-12">
    		<div class="card">
    			<div class="card-header">
                    <router-link :to="{ name: 'matpel.add' }" class="btn btn-primary btn-sm">Tambah matpel</router-link>
    			</div>
    			<div class="card-body">
                    <div class="row">
                        <div class="col-sm-5">
                            <h4 id="traffic" class="card-title mb-0">Manage Matpel</h4>
                            <div class="small text-muted">Buat edit dan hapus matpel</div>
                        </div>
                        <div class="d-none d-md-block col-sm-7">
                            <button type="button" class="btn float-right btn-primary btn-sm mx-1">
                                <i class="cil-print"></i> Cetak data matpel
                            </button>
                        </div>
                    </div>
                    <br>
    				<b-table striped hover bordered :busy="isBusy" small :fields="fields" :items="matpels.data" show-empty>
                        <template v-slot:cell(index)="data">
                            {{ from+data.index }}
                        </template>
                        <template v-slot:table-busy>
                            <div class="text-center text-warning my-2">
							  <img src="/img/loader.svg" width="50px" />
                            </div>
                        </template>
                       <template v-slot:cell(actions)="row">
                            <router-link :to="{ name: 'matpel.edit', params: { id: row.item.id } }" class="btn btn-warning btn-sm">
                                <f<i class="cil-pencil"></i> Edit
                            </router-link>
                            <button class="btn btn-danger btn-sm" @click="deleteMatpel(row.item.id)">
                                <i class="cil-trash"></i> Hapus
                            </button>
                        </template>
                    </b-table>
                    <div class="row">
                        <div class="col-md-6">
                            <p v-if="matpels.data"><i class="fa fa-bars"></i> {{ matpels.data.length }} item dari {{ matpels.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
                                    size="sm"
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
                'index',
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
            matpels: state => state.matpels,
            from: state => state.from
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
        ...mapActions('matpel', ['getMatpels','removeMatpel']),
        ...mapMutations(['CLEAR_ERRORS','SET_LOADING']),
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
                    .then(() => {
                        this.$notify({
                            group: 'foo',
                            title: 'Sukses',
                            type: 'success',
                            text: 'Data matpel berhasil dihapus.'
                        })
                    })
                    .catch((err) => {
                        this.$swal({
                            title: 'Error',
                            text: "Terjadi kesalahan. "+err.data.message,
                            type: 'error'
                        })
                    })
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