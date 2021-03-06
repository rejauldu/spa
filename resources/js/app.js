require('./bootstrap');
import '@babel/polyfill';

import Vue from 'vue';
import {LayoutPlugin} from 'bootstrap-vue/src/components/layout'
Vue.use(LayoutPlugin)
import {CollapsePlugin} from 'bootstrap-vue/src/components/collapse'
Vue.use(CollapsePlugin)
import {ModalPlugin} from 'bootstrap-vue/src/components/modal'
Vue.use(ModalPlugin)
import {ToastPlugin} from 'bootstrap-vue/src/components/toast'
Vue.use(ToastPlugin)
import {TooltipPlugin} from 'bootstrap-vue/src/components/tooltip'
Vue.use(TooltipPlugin)

import router from './router'
import store from './store'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://spa'

Vue.component('layout', require('./components/layout.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
    el: '#app',
    router,
    store
});
