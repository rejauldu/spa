import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoggedin: false,
		user: {}
	},
	getters: {

	},
	actions: {
		login(context, form) {
			console.log(form);
		}
	},
	mutations: {
	}
});
