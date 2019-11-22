import $axios from '../api.js'

const state = () => ({
	ujians: [],
	page: 1
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.ujians = payload
	},
	SET_PAGE(state, payload) {
		state.ujians = payload
	}
}

const actions = {
	getUjians({ commit, state }, payload) {
		let search = typeof payload != 'undefined' ? payload: ''
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian?page=${state.page}&q=${search}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
			})
		})
	},
	addUjian({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian`, payload) 
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				if (error.response.status == 422) {
					commit('SET_ERRORS', error.response.data.errors, { root: true })
				}
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