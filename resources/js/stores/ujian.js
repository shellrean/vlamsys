import $axios from '../api.js'

const state = () => ({
	ujians: [],
	pesertas: [],
	page: 1,
	hasilUjian: [],
	essies: []
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.ujians = payload
	},
	SET_PAGE(state, payload) {
		state.ujians = payload
	},
	ASSIGN_PESERTA_UJIAN(state, payload) {
		state.pesertas = payload
	},
	ASSIGN_HASIL_UJIAN(state, payload) {
		state.hasilUjian = payload
	},
	ASSIGN_JAWABAN_ESAY(state, payload) {
		state.essies = payload
	}
}

const actions = {
	getUjians({ commit, state }, payload) {
		let search = typeof payload != 'undefined' ? payload: ''
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian?page=${state.page}&q=${search}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
			})
		})
	},
	getUjianByBanksoal({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian/banksoal/${payload}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
			})
		})
	},
	getHasilUjianByFilter({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/hasil/filter`,payload)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
			})
		})
	},
	addUjian({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian`, payload) 
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
	setStatus({ state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian/set-status`, payload)
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				
			})
		})
	},
	changeToken({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian/change-token`, payload)
			.then((response) => {
				resolve(response.data)
			})
		})
	},
	getPesertas({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian/get-peserta/${payload}`)
			.then((response) => {
				commit('ASSIGN_PESERTA_UJIAN', response.data)
				resolve(response.data)
			})
			.catch((error) => {

			})
		})
	},
	getHasilPeserta({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian/hasil/${payload}`)
			.then((response) => {
				commit('ASSIGN_HASIL_UJIAN', response.data)
				resolve(response.data)
			})
		})
	},
	submitNilaiEsay({ dispatch, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian/esay/input`, payload)
			.then((response) => {
				resolve()
			})
		})
	},
	getExistsEsay({ state, commit }, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian/esay/exists`, payload)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
			})
		})
	},
	getExistsByBanksoal({ state, commit }, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian/esay/koreksi/${payload}`)
			.then((response) => {
				commit('ASSIGN_JAWABAN_ESAY', response.data)
				resolve()
			})
			.catch((err) => {
				reject()
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