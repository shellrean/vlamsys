import $axios from '../api.js'

const state = () => ({
	matpels: [],
    allMatpels: [],
    matpel: {
        kode_mapel: '',
        nama: '',
        jurusan_id: '',
    },
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
    },
    ASSIGN_FORM(state, payload) {
        state.matpel = {
            kode_mapel: payload.kode_mapel,
            nama: payload.nama
        }
    },
    CLEAR_FORM(state) {
        state.matpel = {
            kode_mapel: '',
            nama: '',
            jurusan_id: ''
        }
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
	submitMatpel({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            $axios.post(`/matpel`, state.matpel)
            .then((response) => {
                dispatch('getMatpels').then(() => {
                    resolve(response.data)
                })
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