import $axios from '../api.js'

const state = () => ({
	soals: [],
	page: 1
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.soals = payload
	},
	SET_PAGE(state, payload) {
        state.page = payload
    }
}

const actions = {
	getSoals({ commit, state }, payload) {
		// let search = typeof payload != 'undefined' ? payload : ''
		return new Promise(( resolve, reject ) =>  {
			$axios.get(`/soal/banksoal/${payload.banksoal_id}`)
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