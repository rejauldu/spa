import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoggedin: JSON.parse(sessionStorage.isLoggedin || "false"),
        isEmailVerified: JSON.parse(sessionStorage.isEmailVerified || "false"),
		user: {},
        cart: JSON.parse(localStorage.cart || '[]'),
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
        cart: (state) => {
            return state.cart;
        },
        quantity: (state) => {
            var quantity_obj = {quantity: 0};
            if (state.cart.length > 0) {
                quantity_obj = state.cart.reduce(function (previousValue, currentValue) {
                    return {
                        "quantity": parseInt(previousValue.quantity) + parseInt(currentValue.quantity)
                    };
                });
            }
            return quantity_obj.quantity;
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
        },
        changeCart(context, data = null) {
            context.commit("changeCart", data);
        },
        clearCart(context) {
            context.commit("clearCart");
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
        },
        changeCart(state, data=null) {
	        if(data)
	            state.cart = data;
            localStorage.cart = JSON.stringify(state.cart);
        },
        clearCart(state) {
            state.cart = [];
            localStorage.cart = JSON.stringify(state.cart);
        }
	}
});
