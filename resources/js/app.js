require('./bootstrap');

import Vue from 'vue';
import {LayoutPlugin} from 'bootstrap-vue/src/components/layout'
Vue.use(LayoutPlugin)
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// // import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://spa'

Vue.component('layout', require('./components/layout.vue').default);

const app = new Vue({
	el: '#app',
	router,
	store
});
