<template>
    <div class="bg-light w-100">
        <div class="container">
            <div class="row justify-content-center align-items-center vh-55">
                <div class="col-md-9 col-lg-7 col-xl-5">
                    <div class="w-100">
                        <div class="card bg-transparent border-white" style="border-width:5px;">
                            <div class="card-header alert alert-theme border-0 text-center"><img src="/assets/logo-sm.png" width="50"><strong class="display-6">Register</strong></div>
                            <div class="card-body">
                                <div class="alert alert-danger fade show" v-if="error">
                                    <span>{{ error }}</span>
                                </div>
                                <div class="text-center mb-3">
                                    <img src="/assets/images/contact-us.jpg" class="width-80 height-80 rounded-circle"/>
                                </div>
                                <form @submit.prevent="register()">
                                    <div class="form-group">
                                        <label for="name" class="form-label">Name</label>
                                        <input id="name" type="text" class="form-control focus-theme" v-model="form.name" required autocomplete="name" autofocus placeholder="Name">
                                    </div>
                                    <div class="form-group">
                                        <label for="email" class="form-label">E-Mail Address</label>
                                        <input id="email" type="email" class="form-control focus-theme" v-model="form.email" required autocomplete="email" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="form-label">Password</label>
                                        <input id="password" type="password" class="form-control focus-theme" v-model="form.password" required autocomplete="new-password" placeholder="Password">
                                    </div>
                                    <div class="form-group">
                                        <label for="password-confirm" class="form-label">Confirm Password</label>
                                        <input id="password-confirm" type="password" class="form-control focus-theme" v-model="form.password_confirmation" required autocomplete="new-password" placeholder="Confirm Password">
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <div class="form-check">
                                                <input class="form-check-input focus-theme" type="checkbox" name="remember" id="remember" checked="checked">
                                                <label class="form-check-label" for="remember">
                                                    <router-link to="/terms-conditions">I agree to the Terms of Services</router-link>
                                                </label>
                                            </div>
                                            <div class="font-10 text-secondary text-justify">When you agree to the <router-link to="/terms-conditions">Terms and Conditions</router-link> you also consent to our use of your personal information to process and operate your OnBiponi® Account. To see how to control your personal data, please see our privacy policy.</div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-0">
                                        <button type="submit" class="btn btn-theme width-200">
                                            Register
                                        </button>
                                    </div>
                                    <div class="d-flex"><hr class="flex-grow-1"/><span class="width-50 text-center display-6">Or</span><hr class="flex-grow-1"/></div>
                                </form>
                                <b-row>
                                    <b-col cols="6"><a href="/auth/facebook" class="btn bg-facebook text-white w-100 excerpt"><i class="fa fa-facebook"></i> Register with facebook</a></b-col>
                                    <b-col cols="6"><a href="/auth/google" class="btn bg-google text-white w-100 excerpt"><i class="fa fa-google"></i> Register with google</a></b-col>
                                </b-row>
                                <b-row class="flex-column mt-4">
                                    <div class="text-center">Already have an OnBiponi<sup>®</sup> account?</div>
                                    <router-link class="text-center text-theme" to="/login">Login</router-link>
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
import store from "../../../store";
import router from "../../../router";

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            error: ''
        }
    },
    methods: {
        register: function () {
            var _this = this;
            store.dispatch("changeLoading", true);
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/register', this.form)
                    .then(function (response) {
                        store.dispatch("changeLoading", false);
                        if(response.data.status_code == 201) {
                            router.push({name: 'login'});
                        }
                    })
                    .catch(function (error) {
                        store.dispatch("changeLoading", false);
                        if (error.response && error.response.status == 400) {
                            _this.error = error.response.deta.message;
                        } else if (error.response && error.response.status == 500) {
                            _this.error = 'Registration successful. Please resend the verification email.';
                        } else {
                            _this.error = "An error occurred. Check your internet connection."
                        }
                    });
            });
        }
    }
}
</script>
