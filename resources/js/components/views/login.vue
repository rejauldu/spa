<template>
    <div class="container">
        <div class="row justify-content-center text-theme">
            <div class="col-md-8 vh-55">
                <div class="position-center-v left-0 right-0">
                <div class="card">
                    <div class="card-header bg-theme text-light"><strong>Login</strong></div>
                    <div class="card-body bg-theme-light">
                        <form @submit.prevent="login()">
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control focus-theme border-theme" v-model="form.email" required autocomplete="email" autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
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
                                    <button type="submit" class="btn btn-theme">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from '../../router'
import store from '../../store'
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login: function() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/login', this.form)
                .then(function (response) {
                    store.dispatch("login", response.data);
                    router.push({ name: 'dashboard'});
                })
                .catch(function (error) {
                    console.log(error);
                });
            });
        }
    }
}
</script>
