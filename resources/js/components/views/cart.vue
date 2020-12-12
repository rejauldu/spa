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
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td colspan="3">
                        <div class="d-flex alert alert-theme align-content-center">
                            <div class="d-flex align-content-center"><img src="/assets/products/image1.webp" class="img-thumbnail width-100" /></div>
                            <div class="d-flex align-items-center pl-3">Congratulations! You are qualified for free shipping</div>
                        </div>
                    </td>
                </tr>
                <tr class="border-bottom">
                    <td class="p-2">
                        <b-container fluid>
                            <b-row>
                                <b-col cols="6" lg="4" class="d-none d-sm-block size-23 width-50"><img src="/assets/products/image1.webp" /></b-col>
                                <b-col cols="12" sm="6" lg="8" class="d-flex align-items-center justify-content-center">
                                    <div>
                                        <div class="display-6 nowrap excerpt">Product title</div>
                                        <div>Price: BDT 10</div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </td>
                    <td class="p-2">
                        <div class="input-group d-flex justify-content-center flex-nowrap">
                            <div class="input-group-prepend cursor-pointer">
                                <span class="input-group-text bg-light">-</span>
                            </div>
                            <input type="text" value="1" class="text-center width-30 border-light display-6"/>
                            <div class="input-group-append cursor-pointer">
                                <span class="input-group-text bg-light">+</span>
                            </div>
                        </div>
                    </td>
                    <td class="p-2">BDT 100</td>
                </tr>
                <tr class="border-bottom">
                    <td class="p-2">
                        <b-container fluid>
                            <b-row>
                                <b-col cols="6" lg="4" class="d-none d-sm-block size-23"><img src="/assets/products/image1.webp" /></b-col>
                                <b-col cols="12" sm="6" lg="8" class="d-flex align-items-center justify-content-center">
                                    <div>
                                        <div class="display-6 nowrap excerpt">Product title</div>
                                        <div>Price: BDT 10</div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </td>
                    <td class="p-2">
                        <div class="input-group d-flex justify-content-center flex-nowrap">
                            <div class="input-group-prepend cursor-pointer">
                                <span class="input-group-text bg-light">-</span>
                            </div>
                            <input type="text" value="1" class="text-center width-30 border-light display-6"/>
                            <div class="input-group-append cursor-pointer">
                                <span class="input-group-text bg-light">+</span>
                            </div>
                        </div>
                    </td>
                    <td class="p-2">BDT 100</td>
                </tr>
                <tr class="border-bottom">
                    <td class="p-2">
                        <b-container fluid>
                            <b-row>
                                <b-col cols="6" lg="4" class="d-none d-sm-block size-23"><img src="/assets/products/image1.webp" /></b-col>
                                <b-col cols="12" sm="6" lg="8" class="d-flex align-items-center justify-content-center">
                                    <div>
                                        <div class="display-6 nowrap excerpt">Product title</div>
                                        <div>Price: BDT 10</div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </td>
                    <td class="p-2">
                        <div class="input-group d-flex justify-content-center flex-nowrap">
                            <div class="input-group-prepend cursor-pointer">
                                <span class="input-group-text bg-light">-</span>
                            </div>
                            <input type="text" value="1" class="text-center width-30 border-light display-6"/>
                            <div class="input-group-append cursor-pointer">
                                <span class="input-group-text bg-light">+</span>
                            </div>
                        </div>
                    </td>
                    <td class="p-2">BDT 100</td>
                </tr>
                </tbody>
            </table>
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
                    <a href="#" @click.prevent="" v-b-toggle.shipping class="text-decoration-none alert-light">
                        Select Shipping
                        <span class="when-opened"></span>
                        <span class="when-closed"></span>
                    </a>
                    <b-collapse id="shipping" class="mt-2">
                        <div class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" id="standard">
                            <label class="custom-control-label" for="standard">
                                Standard delivery
                                <i class="fa fa-info-circle cursor-pointer" id="standard-tooltip"></i>
                                <b-tooltip target="standard-tooltip">
                                    <div class="alert alert-info">
                                        Within 3 working days
                                    </div>
                                </b-tooltip>
                            </label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" id="Expedite">
                            <label class="custom-control-label" for="expedite">
                                Expedite delivery
                                <i class="fa fa-info-circle cursor-pointer" id="expedite-tooltip"></i>
                                <b-tooltip target="expedite-tooltip">
                                    <div class="alert alert-info">
                                        Delivered in same day,<br/>if ordered before 12PM
                                    </div>
                                </b-tooltip>
                            </label>
                        </div>
                    </b-collapse>
                </div>
                <div class="d-flex flex-nowrap alert alert-light border border-light"><div class="mr-auto">Subtotal (7) items</div><div>$182.94</div></div>
                <div class="d-flex flex-nowrap alert alert-light border border-light"><div class="mr-auto">Shipping Charge</div><div>$0</div></div>
                <div class="d-flex flex-nowrap display-6 alert alert-light border border-light"><div class="mr-auto">Order Total</div><div>$182.94</div></div>
                <div class="mb-3"><router-link to="/checkout" class="w-100 btn btn-theme">Secure Checkout</router-link></div>
                <div class=""><router-link to="/products" class="w-100 btn alert-warning">Continue Shopping</router-link></div>
            </div>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "cart"
}
</script>

<style scoped>

</style>
