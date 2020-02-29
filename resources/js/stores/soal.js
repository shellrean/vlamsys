import $axios from '../api.js'

const state = () => ({
	soals: [],
	soal: '',
	page: 1,
	from: 1
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
	SET_FROM_DATA(state, payload) {
		state.from = payload
	}
}

const actions = {
	getSoals({ commit, state }, payload) {
		return new Promise(( resolve, reject ) =>  {
			$axios.get(`/soal/banksoal/${payload.banksoal_id}?page=${state.page}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				commit('SET_FROM_DATA', response.data.meta.from)
				resolve(response.data)
			})
			.catch((err) => {
				reject()
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