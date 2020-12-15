<template>
    <b-container fluid>
        <b-row class="py-5">
            <b-col cols="12" md="5" xl="6">
                <splide :options="primaryOptions" ref="primary">
                    <splide-slide v-for="slide in slides" :key="slide.src">
                        <img :src="slide.src" alt="slide.alt" class="w-100">
                    </splide-slide>
                </splide>
                <splide :options="secondaryOptions" ref="secondary">
                    <splide-slide v-for="slide in slides" :key="slide.src">
                        <div class="card w-100">
                            <div class="card-img-top size-11">
                                <img class="" :src="slide.src" alt="Card image">
                            </div>
                        </div>
                    </splide-slide>
                </splide>
            </b-col>
            <b-col cols="12" md="7" xl="6">
                <h2>{{ product.name }}</h2>
                <p class="text-justify">{{ product.description || 'No description' }}</p>
                <div class="d-flex alert alert-primary align-items-stretch">
                    <div class="d-flex align-items-center"><img src="/assets/home/offers.webp" class="w-100" /></div>
                    <div class="flex-grow-1 px-3">
                        <div>FREE exclusive Ice Skating Rink with purchases over BDT 150.*</div>
                        <router-link to="/offers" class="btn btn-link">Learn more</router-link>
                    </div>
                </div>
                <p class="display-6">Price: BDT 50</p>
                <div class="input-group mb-3 d-flex justify-content-center">
                    <div class="input-group-prepend cursor-pointer">
                        <span class="input-group-text bg-light">-</span>
                    </div>
                    <input type="text" value="1" class="width-50 text-center border-light display-6"/>
                    <div class="input-group-append cursor-pointer">
                        <span class="input-group-text bg-light">+</span>
                    </div>
                </div>
                <hr/>
                <div class="text-center">
                    <button class="btn btn-theme px-5" @click.prevent="$bvToast.show('added-to-bag')">Add to Bag</button>
                </div>
            </b-col>

        </b-row>
    </b-container>
</template>

<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    name: 'carrousel',
    components: {
        Splide,
        SplideSlide,
    },
    data() {
        return {
            primaryOptions: {
                type      : 'loop',
                perPage   : 1,
                perMove   : 1,
                width  : "100%",
                gap       : '1rem',
                pagination: false,
                arrows     : false,

            },
            secondaryOptions: {
                type   : 'loop',
                perPage: 4,
                rewind : true,
                focus  : 'center',
                width  : "100%",
                gap    : '1rem',
                lazyLoad: 'nearby',
                autoplay: true,
                interval: 3000,
                pauseOnHover: false,
                pagination: false,
                cover : true,
                isNavigation: true,
                arrows     : false,
                breakpoints: {
                    '576': {
                        perPage: 4,
                        gap    : '1rem',
                    },
                    '340': {
                        perPage: 3,
                        gap    : '1rem',
                    },
                }
            },
            slides: [{src:'/assets/products/image1.webp'}, {src:'/assets/products/image2.webp'}, {src:'/assets/products/image3.webp'}, {src:'/assets/products/image4.webp'}],
            count : 0,
            product: {}
        }
    },
    methods: {
        updateProduct: function () {
            var _this = this;
            axios.get('/api'+this.$router.currentRoute.path)
                .then(function (response) {
                    if(response.data) {
                        _this.product = response.data;
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
        this.updateProduct();
        this.$refs.primary.sync( this.$refs.secondary.splide );
    },
}
</script>
