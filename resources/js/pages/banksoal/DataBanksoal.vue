<template>
	<div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    Tambah banksoal
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Kode banksoal</label>
                        <input type="text" class="form-control" placeholder="Kode banksoal" v-model="data.kode_banksoal">
                        <p class="text-danger" v-if="errors.kode_mapel">{{ errors.kode_banksoal[0] }}</p>
                    </div>
                    <div class="form-group">
                        <label>Mata pelajaran</label>
                 <!--        <select class="form-control" v-model="data.matpel_id">
                        	<option v-for="matpel in matpels.data" :value="matpel.id">{{ matpel.nama }}</option>
                        </select> -->
                        <v-select label="nama" :options="matpels.data" v-model="data.matpel_id"></v-select>
                        <p class="text-danger" v-if="errors.matpel_id">{{ errors.matpel_id[0] }}</p>
                    </div>
                    <div class="form-group">
                        <b-button squared variant="primary" @click="postBanksoal">Simpan</b-button>
                    </div>
                </div>
                <div class="card-footer">
                </div>
            </div>
        </div>
        <div class="col-lg-8">
    		<div class="card">
    			<div class="card-header">
                    List banksoal
    			</div>
    			<div class="card-body">
    				<b-table striped hover bordered small :fields="fields" :items="banksoals.data" show-empty>
                       <template v-slot:cell(actions)="row">
                            <button class="btn btn-danger btn-sm rounded-0" @click="deleteBanksoal(row.item.id)"><i class="cui-trash"></i></button>
                            <router-link :to="{ name: 'banksoal.soal', params: {banksoal_id: row.item.id} }" class="btn btn-success btn-sm rounded-0"><i class="cui-list"></i></router-link>
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
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
    name: 'DataBanksoal',
    components: {
        'v-select': vSelect
    },
    created() {
        this.getBanksoals()
        this.getAllMatpels()
    },
    data() {
        return {
            fields: [
                { key: 'kode_banksoal', label: 'Kode banksoal'},
                { key: 'matpel.nama', label: 'Mata pelajaran'},
                { key: 'user.name', label: 'Pembuat'},
                { key: 'actions', label: 'Aksi' }
            ],
            search: '',
            data: {
                kode_banksoal: '',
                matpel_id: ''
            },
            selected: ''
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
        postBanksoal() {
            this.addBanksoal({
                kode_banksoal : this.data.kode_banksoal,
                matpel_id : this.data.matpel_id.id
            }).then( (data) => {
                this.$notify({
                  group: 'foo',
                  title: 'Sukses',
                  type: 'success',
                  text: 'Banksoal berhasil ditambah.'
                })
                this.getBanksoals()  
                this.clearForm()
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