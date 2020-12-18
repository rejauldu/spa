<template>
    <b-container fluid>
        <b-row class="py-5">
            <b-col cols="12" md="5" xl="6">
                <splide :options="primaryOptions" ref="primary" v-if="product.id">
                    <splide-slide>
                        <img :src="'/assets/products/'+product.id+'/'+product.image1" :alt="product.name" class="w-100">
                    </splide-slide>
                    <splide-slide>
                        <img :src="'/assets/products/'+product.id+'/'+product.image2" :alt="product.name" class="w-100">
                    </splide-slide>
                    <splide-slide>
                        <img :src="'/assets/products/'+product.id+'/'+product.image3" :alt="product.name" class="w-100">
                    </splide-slide>
                    <splide-slide>
                        <img :src="'/assets/products/'+product.id+'/'+product.image4" :alt="product.name" class="w-100">
                    </splide-slide>
                </splide>
                <splide :options="secondaryOptions" ref="secondary" v-if="product.id">
                    <splide-slide>
                        <div class="card w-100">
                            <div class="card-img-top size-11">
                                <img class="" :src="'/assets/products/'+product.id+'/'+product.image1" :alt="product.name">
                            </div>
                        </div>
                    </splide-slide>
                    <splide-slide>
                        <div class="card w-100">
                            <div class="card-img-top size-11">
                                <img class="" :src="'/assets/products/'+product.id+'/'+product.image2" :alt="product.name">
                            </div>
                        </div>
                    </splide-slide>
                    <splide-slide>
                        <div class="card w-100">
                            <div class="card-img-top size-11">
                                <img class="" :src="'/assets/products/'+product.id+'/'+product.image3" :alt="product.name">
                            </div>
                        </div>
                    </splide-slide>
                    <splide-slide>
                        <div class="card w-100">
                            <div class="card-img-top size-11">
                                <img class="" :src="'/assets/products/'+product.id+'/'+product.image4" :alt="product.name">
                            </div>
                        </div>
                    </splide-slide>
                </splide>
            </b-col>
            <b-col cols="12" md="7" xl="6">
                <h2>{{ product.name }}</h2>
                <p class="text-justify" v-html="product.note"></p>
                <div class="d-flex alert alert-primary align-items-stretch">
                    <div class="d-flex align-items-center"><img src="/assets/home/offers.webp" class="w-100" /></div>
                    <div class="flex-grow-1 px-3">
                        <div>FREE exclusive Ice Skating Rink with purchases over BDT 150.*</div>
                        <router-link to="/offers" class="btn btn-link">Learn more</router-link>
                    </div>
                </div>
                <p class="display-6">Price: BDT {{ product.msrp }}</p>
                <div class="input-group mb-3 d-flex justify-content-center">
                    <div class="input-group-prepend cursor-pointer" @click.prevent="increase(-1)">
                        <span class="input-group-text bg-light">-</span>
                    </div>
                    <input type="text" v-model="quantity" class="width-50 text-center border-light display-6"/>
                    <div class="input-group-append cursor-pointer" @click.prevent="increase(1)">
                        <span class="input-group-text bg-light">+</span>
                    </div>
                </div>
                <hr/>
                <div class="text-center">
                    <button class="btn btn-theme px-5" @click.prevent="addToCart()">Add to Bag</button>
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
                perPage: 4,
                rewind : true,
                width  : "100%",
                gap    : '1rem',
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
            count : 0,
            product: {},
            cart: this.$store.getters.cart,
            quantity: 1,
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
        },
        addToCart: function () {
            if (this.quantity < 1) {
                this.quantity = 1;
                return;
            }
            var is_same = false;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id == this.product.id) {
                    this.cart[i].quantity = parseInt(this.cart[i].quantity) + parseInt(this.quantity);
                    is_same = true;
                    break;
                }
            }
            if (!is_same) {
                let product = {
                    "id": this.product.id,
                    "quantity": this.quantity,
                    "msrp": this.product.msrp,
                    "name": this.product.name,
                    "image1": this.product.image1,
                    "note": this.product.note
                };
                this.cart.unshift(product);
            }
            this.$bvToast.show('added-to-bag');
            this.$store.dispatch("changeCart");
        },
        increase: function (i) {
            this.quantity = parseInt(this.quantity) + parseInt(i);
        }
    },
    mounted() {
        this.updateProduct();
        this.$refs.primary.sync( this.$refs.secondary.splide );
    }
}
</script>
