<template>
    <div class="bg-theme-light w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-7 col-xl-5 vh-55">
                    <div class="position-center-v left-0 right-0">
                        <div class="card">
                            <div class="card-header bg-white border-0 text-center display-6 mt-2">Register</div>
                            <div class="card-body">
                                <div class="alert alert-danger" v-if="error">
                                    <span>{{ error }}</span>
                                </div>
                                <form @submit.prevent="register()">
                                    <div class="form-group row">
                                        <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                                        <div class="col-md-6">
                                            <input id="name" type="text" class="form-control focus-theme" v-model="form.name" required autocomplete="name" autofocus>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                        <div class="col-md-6">
                                            <input id="email" type="email" class="form-control focus-theme" v-model="form.email" required autocomplete="email">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                        <div class="col-md-6">
                                            <input id="password" type="password" class="form-control focus-theme" v-model="form.password" required autocomplete="new-password">
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                        <div class="col-md-6">
                                            <input id="password-confirm" type="password" class="form-control focus-theme" v-model="form.password_confirmation" required autocomplete="new-password">
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-md-6 offset-md-4">
                                            <button type="submit" class="btn btn-theme">
                                                Register
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
