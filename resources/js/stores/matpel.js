import $axios from '../api.js'

const state = () => ({
	matpels: [],
    allMatpels: [],
	page: 1
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.matpels = payload
	},
    ASSIGN_ALL_DATA(state, payload) {
        state.allMatpels = payload
    },
	SET_PAGE(state, payload) {
        state.page = payload
    }
}

const actions = {
	getMatpels({ commit, state }, payload) {
		let search = typeof payload != 'undefined' ? payload : ''
		return new Promise(( resolve, reject ) =>  {
			$axios.get(`/matpel?page=${state.page}&q=${search}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
			})
		}) 
	},
    getAllMatpels({ commit, state }, payload) {
        return new Promise(( resolve, reject ) =>  {
            $axios.get(`/matpel/list`)
            .then((response) => {
                commit('ASSIGN_ALL_DATA', response.data)
                resolve(response.data)
            })
        }) 
    },
	addMatpel({ commit }, payload) {
        return new Promise((resolve, reject) => {
            $axios.post(`/matpel`, payload)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    commit('SET_LOADING',false, { root: true })
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    },
    removeMatpel({ commit }, payload) {
        return new Promise((resolve, reject) => {
            $axios.delete(`/matpel/${payload}`)
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