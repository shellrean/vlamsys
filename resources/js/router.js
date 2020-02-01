import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

Vue.use(Router)
function lazyLoad(view){
	return() => import(`./${view}.vue`)
}

const router = new Router({
	mode: 'history',
	routes: [
		{
		    path: '/setting',
		    component: lazyLoad('pages/setting/Index'),
		    meta: { requiresAuth: true },
		    children: [
		        {
		            path: 'role-permission',
		            name: 'role.permissions',
		            component: lazyLoad('pages/setting/SetPermission'),
		            meta: { title: 'Set Permissions' }
		        },
		    ]
		},
		{
			path: '/login',
			name: 'login',
			component: lazyLoad('pages/Login'),
		},
		{
			path: '/',
			name: 'home',
			component: lazyLoad('pages/Home'),
			meta: { requiresAuth: true }
		},
		{
			path: '/matpel',
			component: lazyLoad('pages/matpel/Index'),
			meta: { requiresAuth: true },
			children: [
				{
                    path: '',
                    name: 'matpel.data',
                    component: lazyLoad('pages/matpel/Matpel'),
                    meta: { title: 'Manage mata pelajaran' }
                },
                {
                	path: 'add',
                	name: 'matpel.add',
                	component: lazyLoad('pages/matpel/Add'),
                	meta: { title: 'Tambah mata pelajara' }
                }
			]
		},
		{
			path: '/peserta',
			component: lazyLoad('pages/peserta/Index'),
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'peserta.data',
					component: lazyLoad('pages/matpel/Matpel'),
					meta: { title: 'Manage peserta' }
				},
				{
					path: 'add',
					name: 'peserta.add',
					component: lazyLoad('pages/peserta/Add'),
					meta: { title: 'Tambah peserta' }
				},
				{
					path: 'upload',
					name: 'peserta.upload',
					component: lazyLoad('pages/peserta/Upload'),
					meta: { title: 'Upload peserta' }
				}
			]
		},
		{
			path: '/banksoal',
			component: lazyLoad('pages/banksoal/Index'),
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'banksoal.data',
					component: lazyLoad('pages/banksoal/DataBanksoal'),
					meta: { title: 'Manage banksoal' }
				},
				{
					path: '/soal/:banksoal_id',
					name: 'banksoal.soal',
					component: lazyLoad('pages/banksoal/SoalBanksoal'),
					meta: { title: 'Manage soal' }
				},
				{
					path: '/soal/:banksoal_id/tambah',
					name: 'banksoal.soal.tambah',
					component: lazyLoad('pages/banksoal/SoalBanksoalTambah'),
					meta: { title: 'Tambah soal' }
				},
				{
					path: '/soal/:banksoal_id/:soal_id',
					name: 'banksoal.soal.edit',
					component : lazyLoad('pages/banksoal/SoalBanksoalEdit'),
					meta: { title: 'Edit soal' }
				}
			]
		},
		{
			path: '/ujian',
			component: lazyLoad('pages/ujian/Index'),
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'ujian.data',
					component: lazyLoad('pages/ujian/Ujian'),
					meta: { title: 'Manage ujian' }
				},
				{
					path: '/peserta/:ujian_id',
					name: 'ujian.peserta',
					component: lazyLoad('pages/ujian/PesertaUjian'),
					meta: { title: 'Lihat peserta ujian' }
				},
				{
					path: 'hasil',
					name: 'ujian.hasil',
					component: lazyLoad('pages/ujian/HasilUjian'),
					meta: { title: 'Hasil ujian' }
				},
				{
					path: 'hasil/:jadwal_id/list',
					name: 'ujian.hasil.list',
					component: lazyLoad('pages/ujian/HasilListUjian'),
					meta: { title: 'Hasil ujian list' }
				},
				{
					path: 'hasil/koreksi',
					name: 'ujian.koreksi',
					component: lazyLoad('pages/ujian/KoreksiUjian'),
					meta: { tiel: 'Koreksi jawaban peserta' }
				}
			]
		},
		{
			path: '/filemedia',
			component: lazyLoad('pages/filemedia/Index'),
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'filemedia.data',
					component: lazyLoad('pages/filemedia/Filemedia'),
					meta: { title: 'Manage filemedia' }
				},
				{
					path: '/filemedia/directory/:directory_id',
					name: 'filemedia.directory',
					component: lazyLoad('pages/filemedia/DirFilemedia'),
					meta: { title: 'Manage directory filemedia' }
				}
			]
		},
		{
			path: '/server',
			component: lazyLoad('pages/server/Index'),
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'server.data',
					component: lazyLoad('pages/server/Server'),
					meta: { title: 'Manage server' }
				},
				{
					path: 'add',
					name: 'server.add',
					component: lazyLoad('pages/server/Add'),
					meta: { title: 'Tambah server' }
				}
			]
		},
		{
			path: '/sekolah',
			component: lazyLoad('pages/sekolah/Index'),
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'sekolah.data',
					component: lazyLoad('pages/sekolah/Sekolah'),
					meta: { title: 'Manage sekolah' }
				},
				{
					path: 'add',
					name: 'sekolah.add',
					component: lazyLoad('pages/sekolah/Add'),
					meta: { title: 'Tambah sekolah' }
				},
				{
					path: 'edit/:id',
					name: 'sekolah.edit',
					component: lazyLoad('pages/sekolah/Edit'),
					meta: { title: 'Edit sekolah' }
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