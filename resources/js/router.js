import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

import Login from './pages/Login.vue'
import Home from './pages/Home.vue'

import MatpelIndex from './pages/matpel/Index.vue'
import DataMatpel from './pages/matpel/Matpel.vue'

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

import FilemediaIndex from './pages/filemedia/Index.vue'
import DataFilemedia from './pages/filemedia/Filemedia.vue'
import DataDirFilemedia from './pages/filemedia/DirFilemedia.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
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
		}
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