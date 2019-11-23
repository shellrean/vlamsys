import $axios from '../api.js'

const state = () => ({
	directories: [],
	contentFilemedia: [],
	page: 1
})

const mutations = {
	ASSIGN_DIRECTORY_DATA(state, payload) {
		state.directories = payload
	},
	SET_PAGE(state, payload) {
        state.page = payload
    },
    ASSIGN_CONTENT_DIRECTORY(state, payload) {
    	state.contentFilemedia = payload
    }
}

const actions = {
	getDirectories({ commit, state }, payload) {
		return new Promise(( resolve, reject) => {
			$axios.get(`/directory`)
			.then((response) => {
				commit('ASSIGN_DIRECTORY_DATA',response.data)
				resolve(response.data)
			})
		})
	},
	addDirectory({ commit, state }, payload) {
		return new Promise(( resolve, reject) => {
			$axios.post(`/directory`, payload)
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				if (error.response.status == 422) {
					commit('SET_ERRORS',error.response.status.data, { root: true })
				}
			})
		})
	},
	getContentFilemedia({ commit, state }, payload) {
		return new Promise(( resolve, reject) => {
			$axios.get(`/directory/${payload}?page=${state.page}`)
			.then((response) => {
				commit('ASSIGN_CONTENT_DIRECTORY', response.data)
				resolve(response.data)
			})
		})
	},
	addFilemedia({ commit, state }, payload) {
		return new Promise ((resolve, reject) => {
			$axios.post(`/directory/filemedia`, payload) 
			.then((response) => {
				resolve(response.data)
			})
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}