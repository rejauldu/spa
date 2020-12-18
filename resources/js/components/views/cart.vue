<template>
<b-container fluid>
    <b-row>
        <b-col cols="12" lg="8">
            <table class="table w-100 text-center">
                <thead>
                    <tr class="alert alert-info">
                        <th class="py-3">Detail</th>
                        <th class="py-3">Quantity</th>
                        <th class="py-3">Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td colspan="4">
                        <div class="d-flex alert alert-theme align-content-center border-0">
                            <div class="d-flex align-content-center"><img src="/assets/products/image1.webp" class="img-thumbnail width-100" /></div>
                            <div class="d-flex align-items-center pl-3">Congratulations! You are qualified for free shipping</div>
                        </div>
                    </td>
                </tr>
                <tr class="border-bottom" v-for="product in products">
                    <td class="p-2">
                        <b-container fluid>
                            <b-row>
                                <b-col cols="6" lg="4" class="d-none d-sm-block size-23 width-50"><img :src="'/assets/products/'+product.id+'/'+product.image1" /></b-col>
                                <b-col cols="12" sm="6" lg="8" class="d-flex align-items-center justify-content-center">
                                    <div>
                                        <div class="display-6 nowrap excerpt">{{ products.name }}</div>
                                        <div>Price: BDT {{ product.msrp }}</div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </td>
                    <td class="p-2">
                        <div class="input-group d-flex justify-content-center flex-nowrap">
                            <div class="input-group-prepend cursor-pointer">
                                <span class="input-group-text bg-light" @click="increase(product, -1)">-</span>
                            </div>
                            <input type="text" v-model="product.quantity" min="1" class="text-center width-30 border-light display-6"/>
                            <div class="input-group-append cursor-pointer">
                                <span class="input-group-text bg-light" @click="increase(product, 1)">+</span>
                            </div>
                        </div>
                    </td>
                    <td class="p-2">BDT {{ product.msrp*product.quantity }}</td>
                    <td><a href="#" @click.prevent="remove(product.id)" class="btn btn-sm alert-danger">x</a></td>
                </tr>
                </tbody>
            </table>
        </b-col>
        <b-col cols="12" lg="4" class="d-flex align-items-center">
            <div class="border border-deep-light w-100 my-3 rounded">
                <div class="alert alert-secondary display-6">Order Summary</div>
                <div class="d-flex flex-nowrap alert alert-light border border-light"><div class="mr-auto">Subtotal ({{ $store.getters.quantity }}) items</div><div>BDT {{ subTotal }}</div></div>
                <div class="d-flex flex-nowrap alert alert-light border border-light"><div class="mr-auto">Shipping Charge</div><div>BDT {{ shipping }}</div></div>
                <div class="d-flex flex-nowrap display-6 alert alert-light border border-light"><div class="mr-auto">Order Total</div><div>BDT {{ total }}</div></div>
                <div class="mb-3"><router-link to="/checkout" class="w-100 btn btn-theme">Secure Checkout</router-link></div>
                <div class=""><router-link to="/products" class="w-100 btn alert-warning">Continue Shopping</router-link></div>
            </div>
        </b-col>
    </b-row>
</b-container>
</template>

<script>


import store from "../../store";

export default {
    name: 'cart',
    data() {
        return {
            products: this.$store.getters.cart,
        }
    },
    methods: {
        increase: function (product, i) {
            product.quantity = parseInt(product.quantity) + parseInt(i);
            if(product.quantity<1)
                product.quantity = 1;
        },
        remove: function (product) {
            this.products = this.products.filter(function( obj ) {
                return obj.id !== product;
            });
            this.$store.dispatch("changeCart", this.products);
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
        shipping: function () {
            return 0;
        },
        total: function () {
            return parseInt(this.shipping)+parseInt(this.subTotal);
        }
    },
    watch: {
        products: {
            handler: function (n, o) {
                this.$store.dispatch("changeCart");
            },
            deep: true,
        }
    }
}
</script>

<style scoped>

</style>
