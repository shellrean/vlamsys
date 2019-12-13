import $axios from '../api.js'

const state = () => ({
	banksoals: [],
    banksoal: '',
	page: 1
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.banksoals = payload
	},
	SET_PAGE(state, payload) {
        state.page = payload
    },
    ASSIGN_FORM(state, payload) {
        state.banksoal = payload
    }
}

const actions = {
	getBanksoals({ commit, state }, payload) {
		let search = typeof payload != 'undefined' ? payload : ''
		return new Promise(( resolve, reject ) =>  {
			$axios.get(`/banksoal?page=${state.page}&q=${search}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
			})
		}) 
	},
    getBanksoal({ commit, state }, payload) {
        return new Promise(( resolve, reject ) => {
            $axios.get(`/banksoal/${payload}`)
            .then((response) => {
                commit('ASSIGN_FORM', response.data)
            })
        })
    },
	addBanksoal({ commit }, payload) {
        return new Promise((resolve, reject) => {
            $axios.post(`/banksoal`, payload)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    },
    addSoalBanksoal({ commit }, payload) {
        return new Promise((resolve, reject) => {
            $axios.post(`/soal/banksoal`, payload) 
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    },
    getDataById({ commit }, payload) {
        return new Promise((resolve, reject) => {
            $axios.get(`/banksoal/${payload}`)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                if(error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.erros, { root: true })
                }
                reject(error)
            })
        })
    },
    updateSoalBanksoal({ commit }, payload) {
        return new Promise((resolve, reject) => {
            $axios.post(`/soal/banksoal/edit`, payload) 
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    },
    removeBanksoal({ commit }, payload) {
        return new Promise((resolve, reject) => {
            $axios.delete(`/banksoal/${payload}`)
            .then((response) => {
                resolve(response.data)
            })
        })
    },
    updateDataBanksoal({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            $axios.put(`/banksoal/${payload.id}`, payload.data)
            .then((response) => {
                dispatch('getBanksoals').then(() => resolve())
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