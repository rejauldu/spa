require('./bootstrap');
import '@babel/polyfill';

import Vue from 'vue';
import {LayoutPlugin} from 'bootstrap-vue/src/components/layout'
Vue.use(LayoutPlugin)
import {CollapsePlugin} from 'bootstrap-vue/src/components/collapse'
Vue.use(CollapsePlugin)
import {ModalPlugin} from 'bootstrap-vue/src/components/modal'
Vue.use(ModalPlugin)

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
