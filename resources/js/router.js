import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

Vue.use(Router)
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'

import MatpelIndex from './pages/matpel/Index.vue'
import DataMatpel from './pages/matpel/Matpel.vue'
import AddMatpel from './pages/matpel/Add.vue'
import EditMatpel from './pages/matpel/Edit.vue'

import PesertaIndex from './pages/peserta/Index.vue'
import DataPeserta from './pages/peserta/Peserta.vue'
import AddPeserta from './pages/peserta/Add.vue'
import UploadPeserta from './pages/peserta/Upload.vue'

import BanksoalIndex from './pages/banksoal/Index.vue'
import DataBanksoal from './pages/banksoal/DataBanksoal.vue'
import SoalBanksoal from './pages/banksoal/SoalBanksoal.vue'
import SoalBanksoalTambah from './pages/banksoal/SoalBanksoalTambah.vue'
import SoalBanksoalEdit from './pages/banksoal/SoalBanksoalEdit.vue'

import UjianIndex from './pages/ujian/Index.vue'
import DataUjian from './pages/ujian/Ujian.vue'
import PesertaUjian from './pages/ujian/PesertaUjian.vue'
import HasilUjian from './pages/ujian/HasilUjian.vue'
import HasilListUjian from './pages/ujian/HasilListUjian.vue'
import KoreksiUjian from './pages/ujian/KoreksiUjian.vue'

import KoreksiIndex from './pages/koreksi/Index.vue'
import KoreksiEsay from './pages/koreksi/KoreksiEsay.vue'

import FilemediaIndex from './pages/filemedia/Index.vue'
import DataFilemedia from './pages/filemedia/Filemedia.vue'
import DataDirFilemedia from './pages/filemedia/DirFilemedia.vue'

import ServerIndex from './pages/server/Index.vue'
import DataServer from './pages/server/Server.vue'
import AddServer from './pages/server/Add.vue'

import SekolahIndex from './pages/sekolah/Index.vue'
import DataSekolah from './pages/sekolah/Sekolah.vue'
import AddSekolah from './pages/sekolah/Add.vue'
import EditSekolah from './pages/sekolah/Edit.vue'
import HasilUjianSekolah from './pages/ujian/HasilUjianSekolah.vue'

import SettingIndex from './pages/setting/Index'
import SetPermission from './pages/setting/SetPermission'


const router = new Router({
	mode: 'history',
	routes: [
		{
		    path: '/setting',
		    component: SettingIndex,
		    meta: { requiresAuth: true },
		    children: [
		        {
		            path: 'role-permission',
		            name: 'role.permissions',
		            component: SetPermission,
		            meta: { title: 'Set Permissions' }
		        },
		    ]
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: { requiresAuth: true }
		},
		{
			path: '/matpel',
			component: MatpelIndex,
			meta: { requiresAuth: true },
			children: [
				{
                    path: '',
                    name: 'matpel.data',
                    component: DataMatpel,
                    meta: { title: 'Manage mata pelajaran' }
                },
                {
                	path: 'add',
                	name: 'matpel.add',
                	component: AddMatpel,
                	meta: { title: 'Tambah mata pelajara' }
                },
                {
                	path: 'edit/:id',
                	name: 'matpel.edit',
                	component: EditMatpel,
                	meta: { title: 'Edit mata pelajaran' }
                }
			]
		},
		{
			path: '/peserta',
			component: PesertaIndex,
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'peserta.data',
					component: DataPeserta,
					meta: { title: 'Manage peserta' }
				},
				{
					path: 'add',
					name: 'peserta.add',
					component: AddPeserta,
					meta: { title: 'Tambah peserta' }
				},
				{
					path: 'upload',
					name: 'peserta.upload',
					component: UploadPeserta,
					meta: { title: 'Upload peserta' }
				}
			]
		},
		{
			path: '/banksoal',
			component: BanksoalIndex,
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'banksoal.data',
					component: DataBanksoal,
					meta: { title: 'Manage banksoal' }
				},
				{
					path: '/soal/:banksoal_id',
					name: 'banksoal.soal',
					component: SoalBanksoal,
					meta: { title: 'Manage soal' }
				},
				{
					path: '/soal/:banksoal_id/tambah',
					name: 'banksoal.soal.tambah',
					component: SoalBanksoalTambah,
					meta: { title: 'Tambah soal' }
				},
				{
					path: '/soal/:banksoal_id/:soal_id',
					name: 'banksoal.soal.edit',
					component : SoalBanksoalEdit,
					meta: { title: 'Edit soal' }
				}
			]
		},
		{
			path: '/ujian',
			component: UjianIndex,
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'ujian.data',
					component: DataUjian,
					meta: { title: 'Manage ujian' }
				},
				{
					path: '/peserta/:ujian_id',
					name: 'ujian.peserta',
					component: PesertaUjian,
					meta: { title: 'Lihat peserta ujian' }
				},
				{
					path: 'hasil',
					name: 'ujian.hasil',
					component: HasilUjian,
					meta: { title: 'Hasil ujian' }
				},
				{
					path: 'hasil/:jadwal_id/list',
					name: 'ujian.hasil.list',
					component: HasilListUjian,
					meta: { title: 'Hasil ujian list' }
				},
				{
					path: 'hasil/koreksi',
					name: 'ujian.koreksi',
					component: KoreksiUjian,
					meta: { title: 'Koreksi jawaban peserta' }
				}
			]
		},
		{
			path: '/koreksi',
			component: KoreksiIndex,
			meta: { requiresAuth: true },
			children: [
				{
					path: 'esay/:banksoal',
					name: 'koreksi.esay',
					component: KoreksiEsay,
					meta: { title: 'Koreksi esay' }
				}
			]
		},
		{
			path: '/filemedia',
			component: FilemediaIndex,
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'filemedia.data',
					component: DataFilemedia,
					meta: { title: 'Manage filemedia' }
				},
				{
					path: '/filemedia/directory/:directory_id',
					name: 'filemedia.directory',
					component: DataDirFilemedia,
					meta: { title: 'Manage directory filemedia' }
				}
			]
		},
		{
			path: '/server',
			component: ServerIndex,
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'server.data',
					component: DataServer,
					meta: { title: 'Manage server' }
				},
				{
					path: 'add',
					name: 'server.add',
					component: AddServer,
					meta: { title: 'Tambah server' }
				}
			]
		},
		{
			path: '/sekolah',
			component: SekolahIndex,
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'sekolah.data',
					component: DataSekolah,
					meta: { title: 'Manage sekolah' }
				},
				{
					path: 'add',
					name: 'sekolah.add',
					component: AddSekolah,
					meta: { title: 'Tambah sekolah' }
				},
				{
					path: 'edit/:id',
					name: 'sekolah.edit',
					component: EditSekolah,
					meta: { title: 'Edit sekolah' }
				}
			]
		},
		{
			path: '/hasil-ujian',
			name: 'hasil-ujian',
			component: HasilUjianSekolah,
			meta: { title: 'Hasil ujian' }
		},
	]
})

router.beforeEach((to, from , next) => {
	store.commit('CLEAR_ERRORS')
	if (to.matched.some(record => record.meta.requiresAuth)) {
		let auth = store.getters.isAuth
		if (!auth) {
			next({ name: 'login' })
		}
		else {
			next()
		}
	}
	else {
		next()
	}
})

export default router