import Vue from 'vue'
import router from './router.js'
import store from './store.js'
import App from './App.vue'

import CoreuiVue from '@coreui/coreui'
import Notifications from 'vue-notification'

import BootstrapVue from 'bootstrap-vue'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(Notifications)
Vue.use(BootstrapVue)

new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	}
})