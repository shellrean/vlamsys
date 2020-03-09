import Vue from 'vue'
import router from './router.js'
import store from './store.js'
import App from './App.vue'
import Awesome from './awesome.js'

import CoreuiVue from '@coreui/coreui'
import Notifications from 'vue-notification'
import VueSweetalert2 from 'vue-sweetalert2'

import BootstrapVue from 'bootstrap-vue'

import 'sweetalert2/dist/sweetalert2.min.css';

import Permissions from './mixins/Permission.js'
Vue.mixin(Permissions)

import { mapActions, mapGetters } from 'vuex'

if (process.env.MIX_APP_ENV === 'production') {
	Vue.config.devtools = false;
	Vue.config.debug = false;
	Vue.config.silent = true; 
}

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)

new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	computed: {
		...mapGetters(['isAuth'])
	},
	methods: {
		...mapActions('user', ['getUserLogin'])
	},
	created() {
		if (this.isAuth) {
			this.getUserLogin()
		}
	}
})