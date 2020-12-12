<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12" lg="8">
                <b-row>
                    <b-col cols="12" md="6" class="p-4">
                        <div class="display-6">New Customer</div>
                        <p>Continue checkout as a guest or register</p>
                        <router-link to="/register" class="btn btn-primary width-200 mb-3">Register</router-link><br/>
                        <router-link to="#" class="btn btn-primary width-200 mb-3">Guest</router-link>
                    </b-col>
                    <b-col cols="12" md="6" class="p-4">
                        <div class="display-6">Returning Customer</div>
                        <p>Access your VIP points & saved information</p>
                        <router-link to="/Login" class="btn btn-primary width-200 mb-3">Login</router-link>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" lg="4" class="d-flex align-items-center">
                <div class="border border-deep-light w-100 my-3 rounded">
                    <div class="alert alert-secondary display-6">Order Summary</div>
                    <div class="alert alert-light border border-light">
                        <a href="#" v-b-toggle.coupon class="text-decoration-none alert-light">
                            Enter Promo Code
                            <span class="when-opened"></span>
                            <span class="when-closed"></span>
                        </a>
                        <b-collapse id="coupon" class="mt-2">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Enter Promo">
                                <div class="input-group-append">
                                    <a href="#" class="input-group-text text-decoration-none alert-theme">Apply</a>
                                </div>
                            </div>
                            <div class="alert alert-primary">
                                <p class="display-6 text-center">Have a promo code?</p>
                                <div class="text-justify">Please enter that code in the Promo Code field above! If you have a VIP Discount Code, please enter that in the VIP Discount Code field in the Payment section during Checkout.</div>
                            </div>
                        </b-collapse>
                    </div>
                    <div class="alert alert-light border border-light">
                        <a href="#" v-b-toggle.collapse-1 class="text-decoration-none alert-light">
                            Select Shipping
                            <span class="when-opened"></span>
                            <span class="when-closed"></span>
                        </a>
                        <b-collapse id="collapse-1" class="mt-2">
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" id="cod" name="example1" value="customEx">
                                <label class="custom-control-label" for="cod">Cash-on delivery</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" id="bKash" name="example1" value="customEx">
                                <label class="custom-control-label" for="bKash">bKash</label>
                            </div>
                        </b-collapse>
                    </div>
                    <div class="d-flex flex-nowrap alert alert-light border border-light"><div class="mr-auto">Subtotal (7) items</div><div>$182.94</div></div>
                    <div class="d-flex flex-nowrap alert alert-light border border-light"><div class="mr-auto">Shipping Charge</div><div>$0</div></div>
                    <div class="d-flex flex-nowrap display-6 alert alert-light border border-light"><div class="mr-auto">Order Total</div><div>$182.94</div></div>
                    <div class="mb-3"><router-link to="/checkout" class="w-100 btn btn-theme">Order Now</router-link></div>
                    <div><router-link to="/products" class="w-100 btn alert-warning">Continue Shopping</router-link></div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "checkout"
}
</script>

<style scoped>

</style>
