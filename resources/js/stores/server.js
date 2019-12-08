import $axios from '../api.js'

const state = () => ({
	servers: [],
	server: {
		name_server: '',
		description: ''
	},
	page: 1
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.servers = payload
	},
	SET_PAGE(state, payload) {
		state.page = payload
	},
	ASSIGN_FORM(state, payload) {
		state.server = {
			name_server: payload.name_server,
			description: payload.description,
		}
	},
	CLEAR_FORM(state) {
		state.peserta = {
			name_server : '',
			description: '',
		}
	}
}

const actions = {
	getServers({ commit, state }, payload) {
		return new Promise(( resolve, reject) => {
			let search = typeof payload != 'undefined' ? payload : ''
			$axios.get(`/server?page=${state.page}&q=${search}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
			})
		})
	},
	submitServer({ dispatch, commit, state }) {
		return new Promise((resolve, reject) => {
			$axios.post(`/server`, state.server)
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				if (error.response.status == 422) {
					commit('SET_LOADING', false, { root: true })
					commit('SET_ERRORS', error.response.data.errors, { root: true })
				}
			})
		})
	},
	removeServer({ dispatch }, payload) {
		return new Promise((resolve, reject) => {
			$axios.delete(`/server/${payload}`)
			.then((response) => {
				dispatch('getServers').then(() => resolve())
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