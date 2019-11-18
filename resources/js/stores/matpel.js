import $axios from '../api.js'

const state = () => ({
	matpels: [],
	page: 1
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.matpels = payload
	}
}

const actions = {
	getMatpels({ commit, state }, payload) {
		let search = typeof payload != 'undefined' ? payload : ''
		return new Promise(( resolve, reject ) =>  {
			$axios.get(`/matpel?page=${state.page}&q=${search}`)
			.then((resonse) => {
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