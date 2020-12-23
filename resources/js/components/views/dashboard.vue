<template>
    <b-container fluid class="vh-55">
        <b-row class="justify-content-center">
            <router-link to="/profile" class="btn btn-dark m-3">My Profile</router-link>
        </b-row>
        <b-row>
            <b-col cols="12" class="mt-3" v-if="error">
                <div class="alert alert-danger text-center">{{ error }}</div>
            </b-col>
            <b-col cols="12">
                <table class="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order in orders">
                            <td>{{ order.id }}</td>
                            <td>{{ order.status.name }}</td>
                            <td>BDT {{ order.amount }}</td>
                            <td><router-link :to="'/orders/'+order.id" class="hover-opacity-5"><i class="fa fa-eye"></i></router-link></td>
                        </tr>
                    </tbody>
                </table>

            </b-col>
            <b-col cols="12">
                <pagination :data="pages" @pagination-change-page="getOrders" class="d-flex justify-content-center my-4"></pagination>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import store from "../../store";

export default {
    name: "dashboard",
    data() {
        return {
            orders: [],
            pages: {},
            error: false,
        }
    },
    methods: {
        getOrders: function (page=1) {
            var _this = this;
            store.dispatch("changeLoading", true);
            axios.get('/api/get-orders?page='+page)
                .then(function (response) {
                    _this.pages = response.data;
                    _this.orders = response.data.data;
                    store.dispatch("changeLoading", false);
                })
                .catch(function (error) {
                    store.dispatch("changeLoading", false);
                    _this.error = "An error occurred. Check your internet connection."
                });
        }
    },
    mounted() {
        this.getOrders();
    }
}
</script>
