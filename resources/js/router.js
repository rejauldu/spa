import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from './components/views/index'

const routes = [
	{
		path:'/', component: index,
	}
]
export default new Router({
	mode: 'history',
	routes
});