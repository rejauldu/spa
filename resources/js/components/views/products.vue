<template>
    <b-container fluid class="vh-55-min">
        <b-row class="py-5" v-if="!products || (products.length == 0)">
            <b-col cols="12" sm="6" md="4" lg="3" xl="2" v-for="i in 12" :key="i">
                <div class="card w-100 bg-skeleton size-23 mb-3">
                    <div class="size-child"></div>
                </div>
            </b-col>
        </b-row>
        <b-row class="py-5" v-else>
            <b-col cols="12" sm="6" md="4" lg="3" xl="2" v-for="product in products" :key="product.id">
                <div class="card mb-3">
                    <div class="size-32">
                        <img class="size-child" :src="'/assets/products/'+product.id+'/'+product.image1" :alt="product.name">
                    </div>
                    <div class="card-body text-center">
                        <h4 class="card-title excerpt nowrap">{{ product.name }}</h4>
                        <p class="card-text excerpt nowrap" v-html="product.note"></p>
                        <router-link :to="'/product/'+product.id" class="btn btn-primary">View Product</router-link>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name: 'products',
    data() {
        return {
            products: [],
            error: ''
        }
    },
    methods: {
        updateProducts: function () {
            var _this = this;
            var initial_url = this.$router.currentRoute.path;
            var url = initial_url.split( '/' );
            var path = url[url.length-1];
                axios.get('/api/products/'+path)
                .then(function (response) {
                    if(response.data) {
                        _this.products = response.data.data;
                    }
                })
                .catch(function (error) {
                    if (error.response && error.response.status == 400) {
                        _this.error=error.response.data.message;
                    } else {
                        _this.error = "An error occurred. Check your internet connection."
                    }
                });
        }
    },
    mounted() {
        this.updateProducts();
    }
}
</script>
