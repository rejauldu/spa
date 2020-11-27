<template>
	<b-container fluid>
        <b-row id="top-carousel" class="alert-theme">
            <b-col cols="12" xl="2" class="d-none d-xl-block"></b-col>
            <b-col cols="12" xl="8" class="text-center height-30 line-height-30">
                <splide :options="topCarousel">
                    <splide-slide>
                        <img src="assets/top-carousel/free-delivery.png" class="height-30" />
                        <span>Hurry! Black Friday offers last 11/27-11/30.</span>
                        <a href="#" class="btn-link">Shop Now</a>
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
                            <a href="#" class="btn btn-dark">Continue shopping <svg xmlns="http://www.w3.org/2000/svg" class="ml-3" width="24" height="24"><path stroke="currentColor" d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></a>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </b-row>
		<b-row>
            <div class="mx-auto mt-4">
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
                    <img class="" src="assets/home/pick-a-brick.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Pick a brick</p>
                </router-link>
                <router-link to="/vip" class="width-80 d-inline-block mx-2 mx-sm-3">
                    <img class="" src="assets/home/vip.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">VIP</p>
                </router-link>
                <router-link to="/technique" class="width-80 d-inline-block mx-2 mx-sm-3">
                    <img class="" src="assets/home/technique.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Technique<sup><small>TM</small></sup></p>
                </router-link>
            </div>
		</b-row>
        <b-row class="py-5">
            <splide :options="splideOptions">
                <splide-slide>
                    <div class="card w-100">
                        <div class="card-img-top size-11">
                            <img class="" src="/assets/products/image1.webp" alt="Card image">
                        </div>
                        <div class="card-body text-center">
                            <h4 class="card-title">John Doe</h4>
                            <p class="card-text">Some example text.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </splide-slide>
                <splide-slide>
                    <div class="card w-100">
                        <div class="card-img-top size-11">
                            <img class="" src="/assets/products/image2.webp" alt="Card image">
                        </div>

                        <div class="card-body text-center">
                            <h4 class="card-title">John Doe</h4>
                            <p class="card-text">Some example text.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </splide-slide>
                <splide-slide>
                    <div class="card w-100">
                        <div class="card-img-top size-11">
                            <img class="" src="/assets/products/image3.webp" alt="Card image">
                        </div>

                        <div class="card-body text-center">
                            <h4 class="card-title">John Doe</h4>
                            <p class="card-text">Some example text.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </splide-slide>
                <splide-slide>
                    <div class="card w-100">
                        <div class="card-img-top size-11">
                            <img class="" src="/assets/products/image1.webp" alt="Card image">
                        </div>

                        <div class="card-body text-center">
                            <h4 class="card-title">John Doe</h4>
                            <p class="card-text">Some example text.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </splide-slide>
                <splide-slide>
                    <div class="card w-100">
                        <div class="card-img-top size-11">
                            <img class="" src="/assets/products/image4.webp" alt="Card image">
                        </div>

                        <div class="card-body text-center">
                            <h4 class="card-title">John Doe</h4>
                            <p class="card-text">Some example text.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
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
                focus  : 'center',
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
    }
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
