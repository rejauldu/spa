import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import auth from './middleware/auth'
import verified from './middleware/verified'
import notVerified from './middleware/not-verified'
import guest from './middleware/guest'
import middlewarePipeline from './middleware/middlewarePipeline'

Vue.use(Router)

import index from './components/views/index'
import login from './components/views/auth/login'
import register from './components/views/auth/register'
import passwordEmail from './components/views/auth/password/email'
import products from './components/views/products'
import product from './components/views/product'
import cart from './components/views/cart'
import checkout from './components/views/checkout'
import dashboard from './components/views/dashboard'
import order from './components/views/order'
import verify from './components/views/auth/verify'
import contactUs from './components/views/contact-us'
import profile from './components/views/profile'
import privacyPolicy from './components/views/privacy-policy'
import chat from './components/views/chats/layout'

const routes = [
	{
		path:'/', name:'index', component: index,
	},
	{
		path:'/login', name:'login', component: login, meta: { middleware: [ guest ] }
	},
	{
		path:'/register', name:'register', component: register, meta: { middleware: [ guest ] }
	},
    {
        path:'/password/reset', name:'password-email', component: passwordEmail, meta: { middleware: [ guest ] }
    },
	{
		path:'/product/:id', name:'product', component: product,
	},
    {
        path:'/products', name:'products', component: products,
    },
    {
        path:'/search/:query?', name:'search', component: products,
    },
    {
        path:'/cart', component: cart,
    },
    {
        path:'/checkout', component: checkout,
    },
	{
		path:'/about-us', component: products,
	},
    {
        path:'/verify', name:'verify', component: verify, meta: { middleware: [ notVerified, auth ] }
    },
	{
		path:'/terms-of-services', component: products,
	},
    {
        path:'/contact-us', component: contactUs,
    },
    {
        path:'/dashboard', name:'dashboard', component: dashboard, meta: { middleware: [ verified, auth] }
    },
    {
        path:'/orders/:id', name:'order', component: order, meta: { middleware: [ verified, auth] }
    },
    {
        path:'/profile', name:'profile', component: profile, meta: { middleware: [ verified, auth] }
    },
    {
        path:'/privacy-policy', name:'privacy-policy', component: privacyPolicy,
    },
    {
        path:'/terms-conditions', name:'terms-conditions', component: privacyPolicy,
    },
    {
        path:'/chat', name:'chat', component: chat,
    },
	{
		path:'*', component: products,
	}
];
const router = new Router({
	mode: 'history',
	linkActiveClass: 'active',
	routes
});
router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }


    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })

});
export default router;
