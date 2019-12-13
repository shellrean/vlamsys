import $axios from '../api.js'

const state = () => ({
	sekolah: [],
	sekola: {
		nis: '',
		nama: '',
		alamat: ''
	},
	page: 1
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.sekolah = payload
	},
	SET_PAGE(state, payload) {
		state.page = payload
	},
	ASSIGN_FORM(state, payload) {
		state.sekola = {
			nis: payload.nis,
			nama: payload.nama,
			alamat: payload.alamat
		}
	},
	CLEAR_FORM(state) {
		state.sekola = {
			nis: '',
			nama: '',
			alamat: ''
		}
	}
}

const actions = {
	getSekolah({ commit, state }, payload) {
		return new Promise(( resolve, reject) => {
			let search = typeof payload != 'undefined' ? payload : ''
			$axios.get(`/sekolah?page=${state.page}&q=${search}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
			})
		})
	},
	submitSekolah({ dispatch, commit, state }) {
		return new Promise((resolve, reject) => {
			commit('SET_LOADING',true, { root: true })
			$axios.post(`/sekolah`, state.sekola)
			.then((response) => {
				dispatch('getSekolah').then(() => {
					commit('SET_LOADING',false, { root: true })
					resolve(response.data)
				})
			})
			.catch((error) => {
				if(error.response.status == 422) {
					commit('SET_LOADING',false, { root: true })
					commit('SET_ERRORS', error.response.data.errors, { root: true })
				}
			})
		})
	},
	editSekolah({ commit }, payload ) {
		return new Promise((resolve, reject) => {
			$axios.get(`/sekolah/${payload}`)
			.then((response) => {
				commit('ASSIGN_FORM', response.data.data)
				resolve(response.data)
			})
		})
	},
	updateSekolah({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			commit('SET_LOADING',true, { root: true })
			$axios.put(`/sekolah/${payload}`, state.sekola)
			.then((response) => {
				commit('SET_LOADING',false, { root: true })
				commit('CLEAR_FORM')
				resolve(response.data)
			})
		})
	},
	removeSekolah({ dispatch }, payload) {
		return new Promise((resolve, reject) => {
			$axios.delete(`/sekolah/${payload}`)
			.then((response) => {
				dispatch('getSekolah').then(() => resolve())
			})
		})
	}
}

export default {
	namespaced: true,
	state, 
	actions,
	mutations
}