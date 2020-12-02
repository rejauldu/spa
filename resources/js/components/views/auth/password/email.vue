<template>
    <div class="bg-theme-light w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-7 col-xl-5 vh-55">
                    <div class="position-center-v left-0 right-0">
                        <div class="card my-5">
                            <div class="card-body">
                                <div class="alert alert-danger fade show" v-if="error">
                                    {{ error }}
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control" v-model="form.email" required autocomplete="email" autofocus>
                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button class="btn btn-primary" @click="send()">
                                            Send Password Reset Link
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
import store from "../../../../store";

export default {
    data() {
        return {
            error: '',
            form: {
                email: ''
            }
        }
    },
    methods: {
        send: function () {
            var _this = this;
            store.dispatch("changeLoading", true);
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/password/email', this.form)
                    .then(function (response) {
                        store.dispatch("changeLoading", false);
                        _this.error = response.data.message;
                    })
                    .catch(function (error) {
                        store.dispatch("changeLoading", false);
                        _this.error = "Sorry. We can't send password reset email right now. Please, try again later.";
                    });
            });
        }
    }
}
</script>
