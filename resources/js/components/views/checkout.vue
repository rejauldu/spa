<template>
    <b-container fluid class="vh-55-min">
        <b-row>
            <b-col cols="12" lg="8" v-if="$store.getters.isLoggedin">
                <div class="card border my-md-3" style="border-width: 5px;">
                    <div class="card-header bg-transparent d-flex">
                        <div class="mr-auto">Your address</div>
                        <div class="">
                            <router-link to="/profile">
                                <svg height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>
                            </router-link>
                        </div>
                    </div>
                    <div class="card-body bg-transparent" v-if="$store.getters.user">
                        <div>{{ $store.getters.user.name }}</div>
                        <div><strong>Phone:</strong> {{ $store.getters.user.phone }}</div>
                        <div><strong>Email:</strong> {{ $store.getters.user.email }}</div>
                        <div v-if="$store.getters.user.division"><strong>City:</strong> {{ $store.getters.user.division.name }}</div>
                        <div v-if="$store.getters.user.region"><strong>Region:</strong> {{ $store.getters.user.region.name }}</div>
                        <div><strong>Address:</strong> <span v-html="$store.getters.user.address"></span></div>
                    </div>
                </div>
            </b-col>
            <b-col cols="12" lg="8" v-else>
                <b-row>
                    <b-col cols="12" md="6" class="p-4 text-center">
                        <div class="display-6">Returning Customer</div>
                        <p>Access your VIP points & saved information</p>
                        <router-link to="/Login" class="btn btn-primary width-200 mb-3">Login</router-link>
                    </b-col>
                    <b-col cols="12" md="6" class="p-4 text-center">
                        <div class="display-6">New Customer</div>
                        <p>Continue checkout as a guest or register</p>
                        <router-link to="/register" class="btn btn-primary width-200 mb-3">Register</router-link><br/>
                        <span class="d-flex width-200 mx-auto"><hr class="flex-grow-1"/><span class="width-50 text-center display-6">Or</span><hr class="flex-grow-1"/></span><br/>
                        <a ref="guest" href="#" @click.prevent="" v-b-toggle.guest class="btn btn-primary width-200 mb-3">Guest</a>
                    </b-col>
                </b-row>
                <b-row>
                    <b-collapse id="guest" class="alert alert-light w-100 border-0">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input ref="name" type="text" class="form-control" placeholder="Enter name" id="name">
                        </div>
                        <div class="form-group">
                            <label for="name">Phone:</label>
                            <input ref="phone" type="text" class="form-control" placeholder="Enter phone" id="phone">
                        </div>
                        <div class="form-group">
                            <label for="city">City</label>
                            <select ref="city" id="city" name="division_id" @change="updateRegions()" class="form-control" v-model="division_id">
                                <option value="0" selected>--Select city--</option>
                                <option v-for="division in divisions" :value="division.id" :key="division.id">{{ division.name }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="region">Region</label>
                            <select ref="region" id="region" name="region_id" class="form-control" v-model="region_id">
                                <option v-for="region in regions" :value="region.id"  :key="region.id">{{ region.name }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="address">Address:</label>
                            <textarea ref="address" class="form-control" rows="3" id="address" placeholder="Address"></textarea>
                        </div>
                    </b-collapse>
                </b-row>
            </b-col>
            <b-col cols="12" lg="4" class="d-flex align-items-center">
                <div class="border border-deep-light w-100 my-3 rounded">
                    <div class="alert alert-secondary display-6">Order Summary</div>
                    <div class="alert alert-light border border-light">
                        <a href="#" @click.prevent="" v-b-toggle.coupon class="text-decoration-none alert-light">
                            Enter Promo Code
                            <span class="when-opened"></span>
                            <span class="when-closed"></span>
                        </a>
                        <b-collapse id="coupon" class="mt-2">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Enter Promo" v-model="promo" ref="promo">
                                <div class="input-group-append">
                                    <a href="#" @click.prevent="promoSubmit()" class="input-group-text text-decoration-none alert-theme">Apply</a>
                                </div>
                            </div>
                            <div class="alert alert-primary">
                                <p class="display-6 text-center">Have a promo code?</p>
                                <div class="text-justify">Please enter that code in the Promo Code field above! If you have a VIP Discount Code, please enter that VIP Discount Code here.</div>
                            </div>
                        </b-collapse>
                    </div>
                    <div class="alert alert-light border border-light">
                        <a href="#" @click.prevent="" v-b-toggle.payment class="text-decoration-none alert-light">
                            Select Payment
                            <span class="when-opened"></span>
                            <span class="when-closed"></span>
                        </a>
                        <b-collapse visible id="payment" class="mt-2">
                            <div class="custom-control custom-radio">
                                <input type="radio" ref="cod" v-model="payment_id" name="payment_id" value="2" class="custom-control-input" id="cod">
                                <label class="custom-control-label" for="cod">
                                    Cash on Delivery
                                    <i class="fa fa-info-circle cursor-pointer" id="cod-tooltip"></i>
                                    <b-tooltip target="cod-tooltip">
                                        <div class="p-1 alert-info">
                                            Payment will be received when delivered.
                                        </div>
                                    </b-tooltip>
                                </label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" v-model="payment_id" name="payment_id" value="1" class="custom-control-input" id="bkash">
                                <label class="custom-control-label" for="bkash">
                                    bKash
                                    <i class="fa fa-info-circle cursor-pointer" id="bkash-tooltip"></i>
                                    <b-tooltip target="bkash-tooltip">
                                        <div class="p-1 alert-info">
                                            <ul class="pl-3">
                                                <li>Send Money To: 01924974960</li>
                                                <li>Enter TrxID below</li>
                                                <li>Done!</li>
                                            </ul>
                                        </div>
                                    </b-tooltip>
                                </label>
                                <input ref="trxid" v-if="payment_id == 1" type="text" v-model="trxid" name="trxid" class="form-control" id="trxid" placeholder="TrxId" autofocus>
                            </div>
                        </b-collapse>
                    </div>
                    <div class="d-flex flex-nowrap alert alert-light border border-light"><div class="mr-auto">Subtotal ({{ $store.getters.quantity }}) items</div><div>BDT {{ subTotal }}</div></div>
                    <div class="d-flex flex-nowrap alert alert-light border border-light"><div class="mr-auto">Discount ({{ discount_percent }}%)</div><div>BDT {{ discount }}</div></div>
                    <div class="d-flex flex-nowrap alert alert-light border border-light"><div class="mr-auto">Shipping Charge</div><div>{{ shipping == 0?'Free':'BDT '+shipping }}</div></div>
                    <div class="d-flex flex-nowrap display-6 alert alert-light border border-light"><div class="mr-auto">Order Total</div><div>BDT {{ total }}</div></div>
                    <div class="alert alert-danger text-center" v-if="error">{{ error }}</div>
                    <div class="mb-3"><a href="#" @click.prevent="order()" class="w-100 btn btn-theme">Order Now</a></div>
                    <div><router-link to="/products" class="w-100 btn alert-warning">Continue Shopping</router-link></div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import store from "../../store";

export default {
    name: "checkout",
    data() {
        return {
            divisions:[],
            regions: [],
            division_id: 0,
            region_id: 0,
            products: this.$store.getters.cart,
            payment_id: 1,
            trxid: '',
            promo: '',
            discount_percent: 0,
            error: false
        }
    },
    methods: {
        getLocation: function () {
            var _this = this;
            axios.get('/api/get-locations')
                .then(function (response) {
                    if(response.data) {
                        _this.divisions = response.data.divisions;
                        _this.regions = response.data.regions;
                    }
                })
                .catch(function (error) {
                    _this.error = "An error occurred. Check your internet connection.";
                });
        },
        updateRegions: function () {
            var _this = this;
            axios.get('/admin/get-regions-by-division/'+this.division_id)
                .then(function (response) {
                    _this.regions = response.data;
                })
                .catch(function (error) {
                    _this.error = "An error occurred. Check your internet connection.";
                });
        },
        order: function () {
            var data = {};
            data.products = this.getProducts;
            data.quantities = this.getQuantities;
            if(this.promo) {
                data.promo = this.promo;
            }
            this.error = false;
            if(!this.products.length) {
                this.error = 'Bag is empty! Please add product to your bag.'
            }
            if (this.$store.getters.isLoggedin){
                data.user_id = this.$store.getters.user.id;
            } else {
                if(!this.$refs.name.value) {
                    if (this.$refs.guest.classList.contains('collapsed')) {
                        this.$refs.guest.click();
                    }
                    this.$nextTick(() => {
                        this.$refs.name.focus();
                        this.$refs.guest.scrollIntoView({behavior:"smooth"});
                    });
                    this.error = 'Enter Your Name';
                } else if(!this.$refs.phone.value) {
                    this.$nextTick(() => {
                        this.$refs.phone.focus();
                        this.$refs.name.scrollIntoView({behavior:"smooth"});
                    });
                    this.error = 'Enter Your Phone';
                } else if(!this.$refs.city.value) {
                    this.$nextTick(() => {
                        this.$refs.city.focus();
                        this.$refs.phone.scrollIntoView({behavior:"smooth"});
                    });
                    this.error = 'Enter Your City';
                } else if(!this.$refs.region.value) {
                    this.$nextTick(() => {
                        this.$refs.region.focus();
                        this.$refs.city.scrollIntoView({behavior:"smooth"});
                    });
                    this.error = 'Enter Your Region';
                } else if(!this.$refs.address.value) {
                    this.$nextTick(() => {
                        this.$refs.address.focus();
                        this.$refs.city.scrollIntoView({behavior:"smooth"});
                    });
                    this.error = 'Enter Your Address';
                }
                data.name = this.$refs.name.value;
                data.phone = this.$refs.phone.value;
                data.division_id = this.$refs.city.value;
                data.region_id = this.$refs.region.value;
                data.address = this.$refs.address.value;
            }
            if(this.error)
                return false;
            if(this.payment_id == 1) {
                if(!this.$refs.trxid.value) {
                    this.$nextTick(() => {
                        this.$refs.trxid.focus();
                        this.$refs.cod.scrollIntoView({behavior:"smooth"});
                    });
                    this.error = 'Enter TraxId';
                }
                data.trxid = this.$refs.trxid.value;
            }
            data.payment_id = this.payment_id;
            if(this.error)
                return false;
            var _this = this;
            this.$store.dispatch("changeLoading", true);
            axios.post('/admin/orders', data)
                .then(function (response) {
                    _this.products = [];
                    _this.$store.dispatch("clearCart");
                    _this.error = "Thank you! We have received your order. We will contact you shortly.";
                    _this.$store.dispatch("changeLoading", false);
                })
                .catch(function (error) {
                    _this.error = "An error occurred. Check your internet connection.";
                    _this.$store.dispatch("changeLoading", false);
                });
        },
        promoSubmit() {
            this.$store.dispatch("changeLoading", true);
            var _this = this;
            axios.post('/api/promo', {promo: this.promo})
                .then(function (response) {
                    _this.discount_percent = response.data.percent;
                    _this.error = "Thank you! Your promo code has been applied";
                    _this.$store.dispatch("changeLoading", false);
                })
                .catch(function (error) {
                    _this.error = "An error occurred. Check your internet connection.";
                    _this.$store.dispatch("changeLoading", false);
                });
        }
    },
    computed: {
        subTotal: function () {
            var price = 0;
            for (let i = 0; i < this.products.length; i++) {
                price += this.products[i].msrp * this.products[i].quantity;
            }
            return price;
        },
        discount: function () {
            return parseInt(this.subTotal)*parseInt(this.discount_percent)/100;
        },
        shipping: function () {
            if(this.division_id == 6 && this.region_id <= 48)
                return 80;
            return 120;
        },
        total: function () {
            return parseInt(this.subTotal)-this.discount+parseInt(this.shipping);
        },
        getProducts: function() {
            return this.products.reduce((a, o) => (a.push(o.id), a), []);
        },
        getQuantities: function() {
            return this.products.reduce((a, o) => (a.push(o.quantity), a), []);
        }
    },
    mounted() {
        this.getLocation();
    }
}
</script>

<style scoped>

</style>
