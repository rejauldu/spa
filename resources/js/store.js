import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoggedin: JSON.parse(sessionStorage.isLoggedin || "false"),
        isEmailVerified: JSON.parse(sessionStorage.isEmailVerified || "false"),
		user: {},
        isError: false,
        errorMessage: '',
        isSuccess: false,
        successMessage: '',
        loading: false,
        width: window.innerWidth,
        height: window.innerheight
	},
	getters: {
        isLoggedin: (state) => {
            return state.isLoggedin;
        },
        isEmailVerified: (state) => {
            return state.isEmailVerified;
        },
        user: (state) => {
            return state.user;
        },
        isLoading: (state) => {
            return state.loading;
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
        },
        changeLogin(context, data) {
            context.commit("changeLogin", data);
        },
        changeEmailVerified(context, data) {
            context.commit("changeEmailVerified", data);
        },
        changeLoading(context, data) {
            context.commit("changeLoading", data);
        }
	},
	mutations: {
	    setUser(state, data) {
	        state.isLoggedin = true;
	        sessionStorage.isLoggedin = "1";
            state.isEmailVerified = true;
            sessionStorage.isEmailVerified = "1";
	        state.user = data;
            state.loading = false;
        },
        login(state, data) {
	        state.isLoggedin = true;
            sessionStorage.isLoggedin = "1";
	        state.user = data;
	        state.loading = false;
        },
        logout(state) {
            state.isLoggedin = false;
            sessionStorage.isLoggedin = "0";
            state.isEmailVerified = false;
            sessionStorage.isEmailVerified = "0";
            state.user = {};
            state.loading = false;
        },
        changeLogin(state, data) {
            state.isLoggedin = JSON.parse(data);
            sessionStorage.isLoggedin = JSON.parse(data);
            state.loading = false;
        },
        changeEmailVerified(state, data) {
            state.isEmailVerified = JSON.parse(data);
            sessionStorage.isEmailVerified = JSON.parse(data);
            state.loading = false;
        },
        changeLoading(state, data) {
            state.loading = data;
        }
	}
});
