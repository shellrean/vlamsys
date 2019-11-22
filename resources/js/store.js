import Vue from 'vue'
import Vuex from 'vuex'

import auth from './stores/auth.js'
import matpel from './stores/matpel.js'
import banksoal from './stores/banksoal.js'
import soal from './stores/soal.js'
import ujian from './stores/ujian.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth,
		matpel,
		banksoal,
		soal,
		ujian
	},
	state: {
		token: localStorage.getItem('token'),
		errors: [],
		isLoading: false
	},
	getters: {
		isAuth: state => {
			return state.token != "null" && state.token != null
		},
		isLoading: state => {
			return state.isLoading
		}
	},
	mutations: {
		SET_TOKEN(state, payload) {
			state.token = payload
		},
		SET_ERRORS(state, payload) {
			state.errors = payload
		},
		CLEAR_ERRORS(state) {
			state.errors = []
		},
		SET_LOADING(state, payload) {
			state.isLoading = payload
		}
	}
})

export default store