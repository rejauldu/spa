require('./bootstrap');

window.Vue = require('vue');
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import router from './router'

Vue.component('layout', require('./components/layout.vue').default);

const app = new Vue({
	el: '#app',
	router
});