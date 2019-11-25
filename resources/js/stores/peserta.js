import $axios from '../api.js'

const state = () => ({
	pesertas: [],
	page: 1
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.pesertas = payload
	},
	SET_PAGE(state, payload) {
		state.page = payload
	}
}

const actions = {
	getPesertas({ commit, state }, payload) {
		let search = typeof payload != 'undefined' ? payload : ''
		return new Promise(( resolve, reject ) => {
			$axios.get(`/peserta?page=${state.page}&q=${search}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
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