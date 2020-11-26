require('./bootstrap');
import '@babel/polyfill';

import Vue from 'vue';
import {LayoutPlugin} from 'bootstrap-vue/src/components/layout'
Vue.use(LayoutPlugin)

import router from './router'
import store from './store'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://spa.onbiponi.com'

Vue.component('layout', require('./components/layout.vue').default);

const app = new Vue({
	el: '#app',
	router,
	store
});
