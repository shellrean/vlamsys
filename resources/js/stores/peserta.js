import $axios from '../api.js'

const state = () => ({
	pesertas: [],
	peserta: {
		server_name: '',
		no_ujian: '',
		nama: '',
		password: '',
		jurusan_id: '',
		sesi: ''
	},
	page: 1,
	uploadPercentage: 0
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.pesertas = payload
	},
	SET_PAGE(state, payload) {
		state.page = payload
	},
	ASSIGN_FORM(state, payload) {
		state.peserta = {
			server_name: payload.server_name,
			no_ujian: payload.no_ujian,
			nama: payload.nama,
			password: payload.password,
			jurusan_id: payload.jurusan_id,
			sesi: payload.sesi
		}
	},
	CLEAR_FORM(state) {
		state.peserta = {
			server_name: '',
			no_ujian : '',
			nama: '',
			password: '',
			jurusan_id: '',
			sesi: ''
		}
	},
	UPLOAD_PROGRESS_BAR(state, payload) {
		state.uploadPercentage = payload
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
	},
	submitPeserta({ dispatch, commit, state }) {
		return new Promise((resolve, reject) => {
			$axios.post(`/peserta`, state.peserta)
			.then((response) => {
				dispatch('getPesertas').then(() => {
					resolve(response.data)
				})
			})
			.catch((error) => {
				if (error.response.status == 422) {
					commit('SET_LOADING', false, { root: true })
					commit('SET_ERRORS', error.response.data.errors, { root: true })
				}
			})
		})
	},
	removePeserta({ dispatch }, payload) {
		return new Promise((resolve, reject) => {
			$axios.delete(`/peserta/${payload}`)
			.then((response) => {
				dispatch('getPesertas').then(() => resolve())
			})
		})
	},
	uploadPeserta({ state, commit }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/peserta/upload`, payload, 
				{
			      headers: {
			          'Content-Type': 'multipart/form-data'
			      },
			      onUploadProgress: function( progressEvent ) {
			        commit('UPLOAD_PROGRESS_BAR',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
			      }.bind(this)
			    }
			)
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