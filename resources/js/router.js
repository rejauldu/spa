import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from './components/views/index'
import login from './components/views/login'
import notFound from './components/views/not-found'

const routes = [
	{
		path:'/', component: index,
	},
	{
		path:'/login', component: login,
	},
	{
		path:'*', component: notFound,
	}
]
export default new Router({
	mode: 'history',
	linkActiveClass: 'active',
	routes
});