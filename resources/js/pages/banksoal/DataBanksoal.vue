<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <b-button @click="$bvModal.show('modal-scoped')" size="sm" variant="primary">Tambah</b-button>
                </div>
                <div class="card-body">
                    <b-table striped hover bordered :busy="isBusy" small :fields="fields" :items="banksoals.data" show-empty>
                        <template v-slot:table-busy>
                            <div class="text-center text-warning my-2">
                              <b-spinner class="align-middle"></b-spinner>
                              <strong>Loading...</strong>
                            </div>
                        </template>
                        <template v-slot:cell(index)="data">
                            {{ data.index + 1 }}
                        </template>
                        <template v-slot:cell(soalpil)="row">
                            {{ row.item.jumlah_soal +" - "+row.item.jumlah_pilihan }}
                        </template>
                       <template v-slot:cell(actions)="row">
                            <button class="btn btn-danger btn-sm rounded-0" @click="deleteBanksoal(row.item.id)"><font-awesome-icon icon="trash" /></button>
                            <router-link :to="{ name: 'banksoal.soal', params: {banksoal_id: row.item.id} }" class="btn btn-success btn-sm rounded-0"><font-awesome-icon icon="list" /></router-link>
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
        <b-modal id="modal-scoped" size="lg">
            <template v-slot:modal-header="{ close }">
              <h5>Tambah banksoal</h5>
            </template>
            <div class="form-group">
                <label>Kode banksoal</label>
                <input type="text" class="form-control" :class="{ 'is-invalid' : errors.kode_banksoal }"  placeholder="Kode banksoal" v-model="data.kode_banksoal">
                <p class="text-danger" v-if="errors.kode_banksoal">{{ errors.kode_banksoal[0] }}</p>
            </div>
            <div class="form-group">
                <label>Mata pelajaran</label>
                <v-select label="nama" :options="matpels.data" v-model="data.matpel_id"></v-select>
                <p class="text-danger" v-if="errors.matpel_id">{{ errors.matpel_id[0] }}</p>
            </div>
            <div class="form-group">
                <label>Jumlah soal</label>
                <input type="number" class="form-control" :class="{ 'is-invalid' : errors.jumlah_soal }" v-model="data.jumlah_soal" placeholder="Jumlah soal">
                <p class="text-danger" v-if="errors.jumlah_soal">{{ errors.jumlah_soal[0] }}</p>
            </div>
            <div class="form-group">
                <label>Jumlah pilihan</label>
                <input type="number" class="form-control" :class="{ 'is-invalid' : errors.jumlah_pilihan }" v-model="data.jumlah_pilihan" placeholder="Jumlah pilihan">
                <p class="text-danger" v-if="errors.jumlah_pilihan">{{ errors.jumlah_pilihan[0] }}</p>
            </div>
            <template v-slot:modal-footer="{ ok, cancel}">

              <b-button variant="primary" @click="postBanksoal">Simpan</b-button>
              <b-button variant="secondary" @click="cancel()">
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
    },
    data() {
        return {
            fields: [
                'index',
                { key: 'kode_banksoal', label: 'Kode banksoal'},
                { key: 'matpel.nama', label: 'Mata pelajaran'},
                { key: 'soalpil', label: 'Soal-pilihan'},
                { key: 'user.name', label: 'Pembuat'},
                { key: 'actions', label: 'Aksi' }
            ],
            search: '',
            data: {
                kode_banksoal: '',
                matpel_id: '',
                jumlah_soal : '',
                jumlah_pilihan: ''
            },
            selected: '',
            isBusy: true
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
        ...mapActions('banksoal', ['getBanksoals','addBanksoal','removeBanksoal']),
        ...mapActions('matpel',['getAllMatpels']),
        ...mapMutations(['CLEAR_ERRORS','SET_LOADING']),
        postBanksoal() {
            this.addBanksoal({
                kode_banksoal : this.data.kode_banksoal,
                matpel_id : this.data.matpel_id.id,
                jumlah_soal: this.data.jumlah_soal,
                jumlah_pilihan: this.data.jumlah_pilihan
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