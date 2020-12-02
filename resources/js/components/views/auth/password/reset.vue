<template>
    <div class="bg-theme-light w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-7 col-xl-5 vh-55">
                    <div class="position-center-v left-0 right-0">
                        <div class="card my-5">
                            <div class="card-header">Reset Password</div>
                            <div class="card-body">
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control is-invalid" name="email" value="" required autocomplete="email" autofocus />
                                        <span class="invalid-feedback" role="alert">
                                            <strong>Email Error</strong>
                                        </span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control is-invalid" name="password" required autocomplete="new-password" />
                                        <span class="invalid-feedback" role="alert">
                                            <strong>Password error</strong>
                                        </span>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                    <div class="col-md-6">
                                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            Reset Password
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from "../../store";
import router from "../../router";

export default {
    data() {
        return {
            error: ''
        }
    },
    methods: {
        resend: function () {
            var _this = this;
            store.dispatch("changeLoading", true);
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/resend/email', this.form)
                    .then(function (response) {
                        store.dispatch("changeLoading", false);
                        if (response.data.status_code == 200) {
                            _this.error = response.data.message;
                        } else if (response.data.status_code == 201) {
                            _this.error = 'A fresh verification link has been sent to your email address.';
                        } else {
                            _this.error = 'Please login first';
                        }
                    })
                    .catch(function (error) {
                        store.dispatch("changeLoading", false);
                        if (error.response && error.response.status == 500) {
                            _this.error = "Sorry. We can't send the verification email right now. Please, try again later.";
                        }
                    });
            });
        }
    }
}
</script>
