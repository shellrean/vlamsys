import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

import Login from './pages/Login.vue'
import Home from './pages/Home.vue'

import MatpelIndex from './pages/matpel/Index.vue'
import DataMatpel from './pages/matpel/Matpel.vue'

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