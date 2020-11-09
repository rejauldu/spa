require('./bootstrap');

import Vue from 'vue';
import {LayoutPlugin} from 'bootstrap-vue/src/components/layout'
Vue.use(LayoutPlugin)

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

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
