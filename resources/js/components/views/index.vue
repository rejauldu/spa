<template>
	<b-container fluid>
		<b-row class="bg-home">
            <div class="position-relative w-100">
                <div v-if="$store.state.width>=768"><img src="assets/home/cover.webp"  class="w-100"/></div>
                <div class="col-12 col-md-6 col-lg-5 col-xl-4" :class="{'position-center-v ml-5': $store.state.width>=768, 'p-5 text-center': $store.state.width<768}">
                    <h1 class="display-5">Trim the tree</h1>
                    <p>Get into the spirit with new Santa with new Reindeer mini-build ornaments</p>
                    <a href="#" class="btn btn-dark">Continue shopping <svg xmlns="http://www.w3.org/2000/svg" class="ml-3" width="24" height="24"><path stroke="currentColor" d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></a>
                </div>
            </div>
		</b-row>
		<b-row>
            <div class="mx-auto mt-4">
                <router-link to="/new" class="width-80 d-inline-block mx-3">
                    <img class="" src="assets/home/new.webp" alt="Card image"><br/>
                    <p class="text-center font-11 mt-2 text-black">New</p>
                </router-link>
                <router-link to="/exclusives" class="width-80 d-inline-block mx-3">
                    <img class="" src="assets/home/exclusives.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Exclusives</p>
                </router-link>
                <router-link to="/offers" class="width-80 d-inline-block mx-3">
                    <img class="" src="assets/home/offers.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Offers</p>
                </router-link>
                <router-link to="/harry-potter" class="width-80 d-inline-block mx-3">
                    <img class="" src="assets/home/harry-potter.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Harry Potter<sup><small>TM</small></sup></p>
                </router-link>
                <router-link to="/technique" class="width-80 d-inline-block mx-3">
                    <img class="" src="assets/home/technique.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Technique<sup><small>TM</small></sup></p>
                </router-link>
                <router-link to="/learn-more" class="width-80 d-inline-block mx-3">
                    <img class="" src="assets/home/learn-more.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Learn more</p>
                </router-link>
                <router-link to="/pick-a-brick" class="width-80 d-inline-block mx-3">
                    <img class="" src="assets/home/pick-a-brick.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">Pick a brick</p>
                </router-link>
                <router-link to="/vip" class="width-80 d-inline-block mx-3">
                    <img class="" src="assets/home/vip.webp" alt="Card image">
                    <p class="text-center font-11 mt-2 text-black">VIP</p>
                </router-link>
            </div>
		</b-row>
        <b-row class="py-5">
            <swiper ref="swiper" :options="swiperOptions">
                <swiper-slide>
                    <div class="card w-100">
                        <div class="card-img-top size-11">
                            <img class="" src="/assets/products/image1.webp" alt="Card image">
                        </div>

                        <div class="card-body">
                            <h4 class="card-title">John Doe</h4>
                            <p class="card-text">Some example text.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card w-100">
                        <div class="card-img-top size-11">
                            <img class="" src="/assets/products/image2.webp" alt="Card image">
                        </div>

                        <div class="card-body">
                            <h4 class="card-title">John Doe</h4>
                            <p class="card-text">Some example text.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card w-100">
                        <div class="card-img-top size-11">
                            <img class="" src="/assets/products/image3.webp" alt="Card image">
                        </div>

                        <div class="card-body">
                            <h4 class="card-title">John Doe</h4>
                            <p class="card-text">Some example text.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card w-100">
                        <div class="card-img-top size-11">
                            <img class="" src="/assets/products/image4.webp" alt="Card image">
                        </div>

                        <div class="card-body">
                            <h4 class="card-title">John Doe</h4>
                            <p class="card-text">Some example text.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </b-row>
	</b-container>
</template>
<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'carrousel',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOptions: {
                spaceBetween: 20,
                direction: 'horizontal',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                on: {
                    resize: () => {
                        this.$refs.swiper.$swiper.changeDirection(
                            window.innerWidth <= 960
                                ? 'vertical'
                                : 'horizontal'
                        )
                    }
                },
                grabCursor: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                loop:true,
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            }
        }
    }
}
</script>
<style scoped>
.bg-home {
    background-color: #c8d7e6;
}

</style>
