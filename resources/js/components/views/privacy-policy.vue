<template>
<b-container fluid>
    <b-row>
        <b-col cols="12"><h4 class="text-center">Privacy and Security</h4></b-col>
        <b-col cols="12" class="text-justify" v-html="content">

        </b-col>
    </b-row>
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
