import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoggedin: false,
		user: {},
        isError: false,
        errorMessage: '',
        isSuccess: false,
        successMessage: ''
	},
	getters: {
        isLoggedin: (state, getters) => {
            return state.isLoggedin;
        },
        user: (state, getters) => {
            return state.user;
        }
	},
	actions: {
	    login(context, data) {
            context.commit("login", data);
        },
        logout(context) {
            context.commit("logout");
        },
        setUser(context, data) {
		    context.commit("setUser", data);
        }
	},
	mutations: {
	    setUser(state, data) {
	        state.isLoggedin = true;
	        state.user = data;
        },
        login(state, data) {
	        state.isLoggedin = true;
	        state.user = data;
        },
        logout(state) {
            state.isLoggedin = false;
            state.user = {};
        }
	}
});
