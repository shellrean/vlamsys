import axios from 'axios'
import store from './store.js'
import router from './router.js';

const $axios = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type' : 'application/json'
	}
})

$axios.interceptors.request.use (
	function ( config ) {
		const token = store.state.token
		if (token) config.headers.Authorization = `Bearer ${token}`
		return config;
	},
	function ( error ) {
		return Promise.reject( error )
	}
)

$axios.interceptors.response.use((response) => { // intercept the global error
    return response
  }, 
  function (error) {
    let originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) { // if the error is 401 and hasent already been retried
      originalRequest._retry = true // now it can be retried 
      // return $axios.post('/users/token', null).then((data) => {
      //   store.dispatch('authfalse') 
      //   store.dispatch('authtruth', data.data)
      //   originalRequest.headers['Authorization'] = 'Bearer ' + store.state.token // new header new token
      //   return Vue.axios(originalRequest) // retry the request that errored out
      // }).catch((error) => {
      //   for (let i = 0; i < error.response.data.errors.length; i++) {
      //     if (error.response.data.errors[i] === 'TOKEN-EXPIRED') {
      //       auth.logout()
      //       return
      //     }
      //   }
      // })
      return new Promise((resolve, reject) => {
        localStorage.removeItem('token')
        resolve()
        console.log('oke')
      })
      .then(() => {
        store.state.token = localStorage.getItem('token')
        router.push('/login')
      })
    }
    if (error.response.status === 404 && !originalRequest._retry) {
      originalRequest._retry = true
      window.location.href = '/'
      return
    }
    // Do something with response error
    return Promise.reject(error)
})

export default $axios