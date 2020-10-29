import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from './components/views/index'
import login from './components/views/login'
import register from './components/views/register'
import products from './components/views/products'
import notFound from './components/views/not-found'

const routes = [
	{
		path:'/', component: index,
	},
	{
		path:'/login', component: login,
	},
	{
		path:'/register', component: register,
	},
	{
		path:'/offers', component: products,
	},
	{
		path:'/nctb', component: products,
	},
	{
		path:'/job', component: products,
	},
	{
		path:'/literature', component: products,
	},
	{
		path:'/higher-study', component: products,
	},
	{
		path:'/academic', component: products,
	},
	{
		path:'/search', component: products,
	},
	{
		path:'/about-us', component: products,
	},
	{
		path:'/terms-of-services', component: products,
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