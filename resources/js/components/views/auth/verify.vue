<template>
    <div class="bg-theme-light w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-7 col-xl-5 vh-55-min">
                    <div class="position-center-v left-0 right-0">
                        <div class="card">
                            <div class="card-body">
                                <div class="alert alert-success" v-if="error">
                                    {{ error }}
                                </div>
                                Before proceeding, please check your email for a verification link.
                                If you did not receive the email, <a class="btn-link" href="#" @click.prevent="resend()">click here to request another</a>
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
