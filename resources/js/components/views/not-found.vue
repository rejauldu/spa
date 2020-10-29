<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 vh-55">
                <div class="position-center-v left-0 right-0">
                    <p class="text-center display-5">404 | Page Not Found</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
                    console.log(error);
                })
                .catch(function (error) {
                    console.log(error);
                });
            });
        }
    }
}
</script>