<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <b-button @click="$bvModal.show('modal-scoped')" size="sm" variant="primary" squared>Tambah</b-button>
                </div>
                <div class="card-body">
                    <b-table striped hover bordered small :fields="fields" :items="banksoals.data" show-empty>
                         <template v-slot:cell(show_details)="row">
                            <b-button size="sm" @click="row.toggleDetails" :variant="row.detailsShowing ? 'danger' : 'success'" squared><font-awesome-icon :icon="row.detailsShowing ? 'chevron-circle-up' : 'chevron-circle-down'" /></b-button>
                        </template>

                        <template v-slot:row-details="row">
                            <b-card>
                                <table class="table table-borderless">
                                    <tr>
                                        <td width="150px">Pembuat</td><td v-text="row.item.user.name"></td>
                                    </tr>
                                    <tr>
                                        <td>Jumlah soal</td><td v-text="row.item.jumlah_soal"></td>
                                    </tr>
                                    <tr>
                                        <td>Jumlah pilihan</td><td v-text="row.item.jumlah_pilihan"></td>
                                    </tr>
                                    <tr>
                                        <td>Jumlah esay</td><td v-text="row.item.jumlah_soal_esay"></td>
                                    </tr>
                                </table>
                            </b-card>
                        </template>
                       <template v-slot:cell(actions)="row">
                            <router-link :to="{ name: 'banksoal.soal', params: {banksoal_id: row.item.id} }" class="btn btn-success btn-sm rounded-0"><font-awesome-icon icon="list" /> Soal</router-link>
                            <b-button @click="getDataId(row.item.id)" size="sm" variant="warning" squared><font-awesome-icon icon="edit" /> Edit</b-button>
                            <button class="btn btn-danger btn-sm rounded-0" @click="deleteBanksoal(row.item.id)"><font-awesome-icon icon="trash" /> Hapus</button>
                        </template>
                    </b-table>
                    <div class="row">
                        <div class="col-md-6">
                            <p v-if="banksoals.data"><i class="fa fa-bars"></i> {{ banksoals.data.length }} item dari {{ banksoals.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
                                    v-model="page"
                                    :total-rows="banksoals.meta.total"
                                    :per-page="banksoals.meta.per_page"
                                    aria-controls="products"
                                    v-if="banksoals.data && banksoals.data.length > 0"
                                    ></b-pagination>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <b-modal id="modal-scoped" size="md" hideBackdrop>
            <template v-slot:modal-header="{ close }">
              <h5>Tambah banksoal</h5>
            </template>
            <div class="form-group">
                <label>Mata pelajaran</label>
                <v-select label="nama" :options="matpels.data" v-model="data.matpel_id"></v-select>
                <p class="text-danger" v-if="errors.matpel_id">{{ errors.matpel_id[0] }}</p>
            </div>
            <div class="form-group">
                <label>Kode banksoal</label>
                <input type="text" class="form-control" :class="{ 'is-invalid' : errors.kode_banksoal }"  placeholder="Kode banksoal" v-model="data.kode_banksoal">
                <p class="text-danger" v-if="errors.kode_banksoal">{{ errors.kode_banksoal[0] }}</p>
            </div>
            <div class="form-group">
                <label>Jumlah soal pilihan ganda</label>
                <input type="number" class="form-control" :class="{ 'is-invalid' : errors.jumlah_soal }" v-model="data.jumlah_soal" placeholder="Jumlah soal pilihan ganda">
                <p class="text-danger" v-if="errors.jumlah_soal">{{ errors.jumlah_soal[0] }}</p>
            </div>
            <div class="form-group">
                <label>Jumlah soal esay</label>
                <input type="number" class="form-control" :class="{ 'is-invalid' : errors.jumlah_soal_esay }" v-model="data.jumlah_soal_esay" placeholder="Jumlah soal esay">
                <p class="text-danger" v-if="errors.jumlah_soal_esay">{{ errors.jumlah_soal_esay[0] }}</p>
            </div>
            <template v-slot:modal-footer="{ ok, cancel}">

              <b-button variant="primary" size="sm" @click="!update ? postBanksoal() : updateBanksoal()" squared>Simpan</b-button>
              <b-button variant="secondary" size="sm" @click="cancel()" squared>
                Cancel
              </b-button>
            </template>
        </b-modal>

    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
    name: 'DataBanksoal',
    components: {
        'v-select': vSelect
    },
    created() {
        this.getBanksoals().then(() => { this.isBusy = false })
        this.getAllMatpels()
        this.getServers()
    },
    data() {
        return {
            fields: [
                { key: 'show_details', label: 'Detail' },
                { key: 'kode_banksoal', label: 'Kode banksoal'},
                { key: 'matpel.nama', label: 'Mata pelajaran'},
                { key: 'actions', label: 'Aksi' }
            ],
            search: '',
            data: {
                kode_banksoal: '',
                matpel_id: '',
                jumlah_soal : '',
                jumlah_pilihan: 5,
                server_name: '',
                jumlah_soal_esay: ''
            },
            selected: '',
            isBusy: true,
            update: 0
        }
    },
    computed: {
        ...mapState(['errors']),
        ...mapState('banksoal', {
            banksoals: state => state.banksoals
        }),
        ...mapState('matpel', {
            matpels: state => state.allMatpels
        }),
        ...mapState('server', {
            servers: state => state.servers
        }),
        page: {
            get() {
                return this.$store.state.banksoal.page
            },
            set(val) {
                this.$store.commit('banksoal/SET_PAGE', val)
            }
        }
    },
    methods: {
        ...mapActions('server', ['getServers']),
        ...mapActions('banksoal', ['getBanksoals','addBanksoal','removeBanksoal','getDataById','updateDataBanksoal']),
        ...mapActions('matpel',['getAllMatpels']),
        ...mapMutations(['CLEAR_ERRORS','SET_LOADING']),
        postBanksoal() {
            this.addBanksoal({
                name_server: this.data.server_name.server_name,
                kode_banksoal : this.data.kode_banksoal,
                matpel_id : this.data.matpel_id.id,
                jumlah_soal: this.data.jumlah_soal,
                jumlah_pilihan: this.data.jumlah_pilihan,
                jumlah_soal_esay: this.data.jumlah_soal_esay
            }).then( (data) => {
                this.$notify({
                  group: 'foo',
                  title: 'Sukses',
                  type: 'success',
                  text: 'Banksoal berhasil ditambah.'
                })
                this.getBanksoals()  
                this.clearForm()
                this.CLEAR_ERRORS()
                this.$bvModal.hide('modal-scoped')
            })
        },
        updateBanksoal() {
            this.updateDataBanksoal({
                id: this.update,
                data: this.data
            })
            .then(() => {
               this.$notify({
                  group: 'foo',
                  title: 'Sukses',
                  type: 'success',
                  text: 'Banksoal berhasil diubah.'
                })
                this.getBanksoals()  
                this.clearForm()
                this.CLEAR_ERRORS()
                this.$bvModal.hide('modal-scoped')
                this.update = 0
            })
        },
        deleteBanksoal(id) {
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
                    this.removeBanksoal(id)
                    this.getBanksoals()
                }
            })
        },
        clearForm() {
            this.data = {
                kode_banksoal: ''
            }
        },
        getDataId(id) {
            this.getDataById(id)
            .then((response) => {
                this.data = {
                    kode_banksoal: response.data.kode_banksoal,
                    matpel_id: response.data.matpel.nama,
                    jumlah_soal : response.data.jumlah_soal,
                    jumlah_pilihan: response.data.jumlah_pilihan,
                    server_name: response.data.server_name,
                    jumlah_soal_esay: response.data.jumlah_soal_esay
                }
                this.update = response.data.id
                this.$bvModal.show('modal-scoped')
            })
        }
    },
    watch: {
        page() {
            this.getBanksoals()
        },
        search() {
            this.getBanksoals(this.search)
        }
    },
}
</script>