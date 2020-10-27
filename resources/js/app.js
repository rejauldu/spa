require('./bootstrap');

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import router from './router'
import store from './store'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://spa'

Vue.component('layout', require('./components/layout.vue').default);

const app = new Vue({
	el: '#app',
	router,
	store
});
