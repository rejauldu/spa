<template>
    <b-container fluid>
        <b-row class="justify-content-center">
            <a href="#" class="btn-light p-2 px-3 text-decoration-none">&#60;&#60;</a><a href="#" v-for="i in total" class="btn-light p-2 px-3 text-decoration-none">{{ i }}</a><a href="#" class="btn-light p-2 px-3 text-decoration-none">&#62;&#62;</a>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "paginate",
    data() {
        return {
        }
    },
    computed: {
        total: function () {
            var page = this.pages.total/this.pages.per_page;
            return page?page:0;
        }
    },
    mounted() {
        this.method(1);
    },
    props:['pages', 'method']
}
</script>

<style scoped>

</style>
