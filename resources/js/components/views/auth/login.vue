<template>
    <div class="bg-light w-100">
        <div class="container">
            <div class="row justify-content-center align-items-center vh-55-min">
                <div class="col-md-9 col-lg-7 col-xl-5">
                    <div class="w-100">
                        <div class="card bg-transparent border-white" style="border-width:5px;">
                            <div class="card-header alert alert-theme border-0 text-center"><img src="/assets/logo-sm.png" width="50"><strong class="display-6">Login</strong></div>
                            <div class="card-body">
                                <div class="alert alert-danger fade show" v-if="error">
                                    <span>{{ error }}</span>
                                </div>
                                <div class="text-center mb-3">
                                    <img src="/assets/images/contact-us.jpg" class="width-80 height-80 rounded-circle"/>
                                </div>
                                <form @submit.prevent="login()">
                                    <div class="form-group">
                                        <label for="email" class="">E-Mail Address</label>
                                        <input id="email" type="email" class="form-control focus-theme" v-model="form.email" required autocomplete="email" autofocus placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="">Password</label>
                                        <input id="password" type="password" class="form-control focus-theme" v-model="form.password" required autocomplete="current-password" placeholder="Password">
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <div class="form-check">
                                                <input class="form-check-input focus-theme" type="checkbox" name="remember" id="remember" checked="checked">
                                                <label class="form-check-label" for="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <div class="font-10 text-secondary">Remember to log out afterwards if you’re using a shared computer, for example in a library or school</div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-theme width-80">
                                                Login
                                            </button>
                                            <router-link class="btn btn-link text-theme" to="/password/reset">
                                                Forgot Your Password?
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="d-flex"><hr class="flex-grow-1"/><span class="width-50 text-center display-6">Or</span><hr class="flex-grow-1"/></div>
                                </form>
                                <b-row>
                                    <b-col cols="6"><a href="/auth/facebook" class="btn bg-facebook text-white w-100 excerpt"><i class="fa fa-facebook"></i> Login with facebook</a></b-col>
                                    <b-col cols="6"><a href="/auth/google" class="btn bg-google text-white w-100 excerpt"><i class="fa fa-google"></i> Login with google</a></b-col>
                                </b-row>
                                <b-row class="flex-column mt-4">
                                    <div class="text-center">Don't have an OnBiponi<sup>®</sup> account?</div>
                                    <router-link class="text-center text-theme" to="/register">Create an Account</router-link>
                                </b-row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from '../../../router'
import store from '../../../store'

export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            error: ''
        }
    },
    methods: {
        login: function () {
            store.dispatch("changeLoading", true);
            var _this = this;
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/login', this.form)
                    .then(function (response) {
                        store.dispatch("changeLoading", false);
                        if(response.data && response.data.status_code == 200) {
                            store.dispatch("login", response.data);
                            store.dispatch("changeEmailVerified", "1");
                            router.push({name: 'dashboard'});
                        } else if (response.data && response.data.status_code == 401) {
                            store.dispatch("login", "1");
                            router.push({name: 'verify'});
                        }
                    })
                    .catch(function (error) {
                        store.dispatch("changeLoading", false);
                        if (error.response && error.response.status == 400) {
                            _this.error=error.response.data.message;
                        } else {
                            _this.error = "An error occurred. Check your internet connection."
                        }
                    });
            });
        }
    }
}
</script>
<style>
.fa.fa-facebook {
    content: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='white' d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z'></path></svg>");
    display: inline-block;
    width:14px;
    height:14px;
}
.fa.fa-google {
    content: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 488 512'><path fill='white' d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'></path></svg>");
    display: inline-block;
    width:14px;
    height:14px;
}
</style>
