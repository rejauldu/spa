<template>
	<b-container fluid class="vh-55-min">
        <b-row id="top-carousel" class="alert-theme">
            <b-col cols="12" xl="2" class="d-none d-xl-block"></b-col>
            <b-col cols="12" xl="8" class="text-center height-30 line-height-30 nowrap">
                <splide :options="topCarousel">
                    <splide-slide>
                        <img src="assets/top-carousel/free-delivery.png" class="height-30 vertical-center" />
                        <span class="excerpt width-150 vertical-center d-inline-block d-md-none">Hurry! Black Friday offers last 11/27-11/30.</span>
                        <span class="vertical-center d-none d-md-inline-block">Hurry! Black Friday offers last 11/27-11/30.</span>
                        <router-link to="/products" class="btn-link vertical-center">Shop Now</router-link>
                    </splide-slide>
                </splide>
            </b-col>
        </b-row>
        <b-row class="bg-home text-center" :class="{'bg-home-img': $store.state.width>=768}">
            <b-container fluid :class="{'size-31': $store.state.width>=768}">
                <b-row class="size-child">
                    <div class="d-none d-lg-block col-12 col-lg-1"></div>
                    <div class="col-12 col-md-6 col-lg-5 col-xl-4">
                        <div class="w-100"  :class="{'position-center-v': $store.state.width>=768, 'my-4': $store.state.width<768}">
                            <h1 class="display-5">Trim the tree</h1>
                            <p>Get into the spirit with new Santa with new Reindeer mini-build ornaments</p>
                            <router-link to="/products" class="btn btn-dark">Continue shopping <svg xmlns="http://www.w3.org/2000/svg" class="ml-3" width="24" height="24"><path stroke="currentColor" d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></router-link>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </b-row>
		<b-row>
            <div class="mx-auto mt-4 text-center">
                <router-link to="/new" class="width-80 d-inline-block mx-2 mx-sm-3">
                    <img class="" src="assets/home/new.webp" alt="Card image"><br/>
                    <p class="text-center font-11 mt-2 text-black">New</p>
                </router-link>
                <router-link to="/exclusives" class="width-80 d-inline-block mx-2 mx-sm-3">
                    <img class="" src="assets/home/exclusives.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Exclusives</p>
                </router-link>
                <router-link to="/offers" class="width-80 d-inline-block mx-2 mx-sm-3">
                    <img class="" src="assets/home/offers.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Offers</p>
                </router-link>
                <router-link to="/harry-potter" class="width-80 d-inline-block mx-2 mx-sm-3">
                    <img class="" src="assets/home/harry-potter.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Harry Potter<sup><small>TM</small></sup></p>
                </router-link>
                <router-link to="/technique" class="width-80 d-inline-block mx-2 mx-sm-3">
                    <img class="" src="assets/home/technique.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Technique<sup><small>TM</small></sup></p>
                </router-link>
                <router-link to="/learn-more" class="width-80 d-inline-block mx-2 mx-sm-3">
                    <img class="" src="assets/home/learn-more.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Learn more</p>
                </router-link>
                <router-link to="/pick-a-brick" class="width-80 d-inline-block mx-2 mx-sm-3">
                    <img class="" src="assets/home/promotion.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Promotion</p>
                </router-link>
                <router-link to="/vip" class="width-80 d-inline-block mx-2 mx-sm-3">
                    <img class="" src="assets/home/vip.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">VIP</p>
                </router-link>
                <router-link to="/technique" class="width-80 d-inline-block mx-2 mx-sm-3">
                    <img class="" src="assets/home/holiday.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Holiday</p>
                </router-link>
            </div>
		</b-row>
        <b-row class="py-5">
            <splide :options="splideOptions">
                <splide-slide v-for="product in products" :key="product.src">
                    <div class="card w-100">
                        <div class="card-img-top size-11">
                            <img :src="'/assets/products/'+product.id+'/'+product.image1" alt="Card image">
                        </div>
                        <div class="card-body text-center">
                            <h4 class="card-title excerpt nowrap">{{ product.name }}</h4>
                            <p class="card-text excerpt w-100" v-html="product.note"></p>
                            <router-link :to="'/product/'+product.id" class="btn btn-theme">View detail</router-link>
                        </div>
                    </div>
                </splide-slide>
            </splide>
        </b-row>
	</b-container>
</template>
<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import products from "./products";

export default {
    name: 'carrousel',
    components: {
        Splide,
        SplideSlide,
    },
    data() {
        return {
            topCarousel: {
                type   : 'loop',
                perPage: 1,
                rewind : true,
                focus  : 'center',
                width  : "100%",
                gap    : '1rem',
                lazyLoad: 'nearby',
                pagination: false,
            },
            splideOptions: {
                type   : 'loop',
                perPage: 4,
                rewind : true,
                width  : "100%",
                gap    : '1rem',
                lazyLoad: 'nearby',
                autoplay: true,
                interval: 3000,
                pauseOnHover: false,
                pagination: false,
                breakpoints: {
                    '1024': {
                        perPage: 3,
                        gap    : '1rem',
                    },
                    '768': {
                        perPage: 2,
                        gap    : '1rem',
                    },
                    '640': {
                        perPage: 2,
                        gap    : '1rem',
                    },
                    '340': {
                        perPage: 1,
                        gap    : '1rem',
                    },
                }
            }
        }
    },
    props: ['products']
}
</script>
<style>
#top-carousel .splide__arrow {
    background: transparent;
}
</style>
<style scoped>
.bg-home {
    background: #c8d7e6;
}
.bg-home-img {
    background: #c8d7e6 url('/assets/home/cover.webp') no-repeat right top;
    background-size: 100% 100%;
}
.size-31 {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.size-31:after {
    content: "";
    display: block;
    padding-bottom: 33%
}

.size-31>img, .size-31>.size-child {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-position: center;
}
</style>
