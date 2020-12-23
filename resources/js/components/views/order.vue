<template>
    <b-container fluid v-if="order" class="vh-55">
        <b-row class="justify-content-center">
            <div class="card alert-warning flex-fill">
                <div class="card-body">
                    <p>Order status: {{ order.status.name }}</p>
                    <p>Total Price: BDT {{ order.amount }}</p>

                </div>
            </div>
            <div class="card alert-warning flex-fill">
                <div class="card-body">
                    <p>Ordered at: {{ stringToDate(order.created_at) }}</p>
                    <p>Payment Method: {{ order.payment.name }}</p>
                </div>
            </div>
        </b-row>
        <b-row>
            <b-col cols="12" v-if="error">
                <div class="alert alert-danger text-center">{{ error }}</div>
            </b-col>
        </b-row>
        <b-row>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="detail in order.details">
                    <td><img :src="'/assets/products/'+detail.product.id+'/'+detail.product.image1" class="width-70" /></td>
                    <td>{{ detail.product.name }}</td>
                    <td>{{ detail.quantity }}</td>
                    <td>BDT {{ detail.product.msrp }}</td>
                </tr>
                </tbody>
            </table>
        </b-row>
        <b-row class="justify-content-center">
            <router-link to="/dashboard" class="btn btn-dark mb-3">View all orders</router-link>
        </b-row>
    </b-container>
</template>

<script>
import store from "../../store";

export default {
    name: "order",
    data() {
        return {
            order: false,
            error: false,
        }
    },
    methods: {
        getOrder: function () {
            store.dispatch("changeLoading", true);
            var _this = this;
            axios.get('/api'+this.$router.currentRoute.path)
                .then(function (response) {
                    _this.order = response.data;
                    store.dispatch("changeLoading", false);
                })
                .catch(function (error) {
                    store.dispatch("changeLoading", false);
                    _this.error = "An error occurred. Check your internet connection."
                });
        },
        stringToDate: function (string) {
            var d = new Date(string);
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
            return da+'th '+mo+' '+ye;
        }
    },
    mounted() {
        this.getOrder();
    }
}
</script>

<style scoped>

</style>
