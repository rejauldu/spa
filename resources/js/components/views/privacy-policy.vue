<template>
    <b-container class="vh-55-min">
        <b-row>
            <b-col cols="12">
                <h4 class="mt-md-5">Privacy and Security</h4>
                <div>Privacy and security of OnBiponi</div>
            </b-col>
            <hr class="my-3 my-md-5 w-100"/>
        </b-row>
        <b-row class="text-justify" v-html="content"></b-row>
    </b-container>
</template>

<script>

export default {
    name: "privacy-policy",
    data() {
        return {
            content:'',
            error: ''
        }
    },
    methods: {
        getContent: function () {
            var _this = this;
            axios.get('/api/pages/privacy-policy')
                .then(function (response) {
                    _this.content = response.data;
                })
                .catch(function (error) {
                    _this.error = "An error occurred. Check your internet connection."
                });
        }
    },
    mounted() {
        this.getContent();
    }
}
</script>

<style scoped>

</style>
