import $axios from '../api.js'

const state = () => ({
	soals: [],
	soal: '',
	page: 1
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.soals = payload
	},
	SET_PAGE(state, payload) {
        state.page = payload
    },
    ASSIGN_FORM(state, payload) {
        state.soal = payload
    },
}

const actions = {
	getSoals({ commit, state }, payload) {
		return new Promise(( resolve, reject ) =>  {
			$axios.get(`/soal/banksoal/${payload.banksoal_id}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
			})
		}) 
	},
	editSoalBanksoal({ commit, state }, payload ) {
		return new Promise(( resolve, reject) => {
			$axios.get(`/soal/${payload}`)
			.then((response) => {
				commit('ASSIGN_FORM', response.data)
				resolve(response.data)
			})
		})
	},
	removeSoal({ commit }, payload) {
		return new Promise((resolve, reject) => {
			$axios.delete(`/soal/banksoal/${payload}`)
			.then((response) => {
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