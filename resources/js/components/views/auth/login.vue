<template>
    <div class="bg-theme-light w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-7 col-xl-5 vh-55">
                    <div class="position-center-v left-0 right-0">
                        <div class="card">
                            <div class="card-header bg-white border-0 text-center display-6 mt-2"><strong>Login</strong></div>
                            <b-container class="card-body">
                                <div class="alert alert-danger fade show" v-if="error">
                                    <strong>Wrong!</strong> <span>{{ error }}</span>
                                </div>
                                <form @submit.prevent="login()">
                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                        <div class="col-md-7">
                                            <input id="email" type="email" class="form-control focus-theme border-theme" v-model="form.email" required autocomplete="email" autofocus>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                        <div class="col-md-7">
                                            <input id="password" type="password" class="form-control focus-theme border-theme" v-model="form.password" required autocomplete="current-password">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6 offset-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input focus-theme" type="checkbox" name="remember" id="remember">
                                                <label class="form-check-label" for="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-md-8 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                Login
                                            </button>

                                            <router-link class="btn btn-link" to="/password/reset">
                                                Forgot Your Password?
                                            </router-link>
                                        </div>
                                    </div>
                                </form>
                            </b-container>
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
