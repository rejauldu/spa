<template>
    <div class="bg-light w-100">
        <div class="container">
            <div class="row justify-content-center align-items-center vh-55">
                <div class="col-md-9 col-lg-7 col-xl-5">
                    <div class="w-100">
                        <div class="card bg-transparent border-white" style="border-width:5px;" v-if="!security_tab">
                            <div class="card-header alert alert-theme border-0 text-center"><img src="/assets/logo-sm.png" width="50"><strong class="display-6">My Profile</strong></div>
                            <div class="card-body">
                                <div class="alert alert-danger fade show" v-if="error">
                                    <span>{{ error }}</span>
                                </div>
                                <form @submit.prevent="update()">
                                    <div class="text-center mb-3">
                                        <img :src="'/assets/profile/'+(form.photo)" class="width-80 height-80 rounded-circle"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="photo" class="">Add New Photo</label>
                                        <input type="file" ref="file" @change="handleFileUpload()" id="photo" name="photo" class="form-control bg-theme text-white" accept="image/*" value="Upload picture" />
                                    </div>
                                    <div class="form-group">
                                        <label for="name" class="">Name</label>
                                        <input id="name" type="text" name="name" class="form-control focus-theme" v-model="form.name" required autocomplete="name" autofocus placeholder="Name">
                                    </div>
                                    <div class="form-group">
                                        <label for="phone" class="">Phone</label>
                                        <input id="phone" type="tel" name="phone" class="form-control focus-theme" v-model="form.phone" required autocomplete="phone" placeholder="Phone">
                                    </div>
                                    <div class="form-group">
                                        <label for="email" class="">Email</label>
                                        <input id="email" type="email" name="email" class="form-control focus-theme" v-model="form.email" required autocomplete="email" placeholder="Email" disabled>
                                    </div>
                                    <div class="form-group">
                                        <label for="city">City</label>
                                        <select id="city" name="division_id" @change="updateRegions()" class="form-control" v-model="form.division_id">
                                            <option value="0" selected>--Select city--</option>
                                            <option v-for="division in divisions" :value="division.id" :key="division.id">{{ division.name }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="region">Region</label>
                                        <select id="region" name="region_id" class="form-control" v-model="form.region_id">
                                            <option v-for="region in regions" :value="region.id"  :key="region.id">{{ region.name }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-6">
                                            <label for="address">Address</label>
                                            <textarea id="address" class="form-control" name="address" placeholder="Enter Address" title="Enter you Address" v-model="form.address"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-theme width-80">Update</button>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer d-flex mt-4">
                                <div class="text-center mr-1">Update security settings? </div>
                                <a href="#" @click.prevent="security_tab = true" class="text-center text-theme">Change Password</a>
                            </div>
                        </div>
                        <div class="card bg-transparent border-white" style="border-width:5px;" v-else>
                            <div class="card-header alert alert-theme border-0 text-center"><img src="/assets/logo-sm.png" width="50"><strong class="display-6">Security Settings</strong></div>
                            <div class="card-body">
                                <div class="alert alert-danger fade show" v-if="error">
                                    <span>{{ error }}</span>
                                </div>
                                <form @submit.prevent="update()">
                                    <div class="form-group">
                                        <label for="password_old">Old Password</label>
                                        <input id="password_old" type="password" class="form-control" name="password_old" v-model="password_old" placeholder="Enter old password" title="Enter old password."/>
                                    </div>
                                    <div class="form-group">
                                        <label for="pass">New Password</label>
                                        <input id="pass" type="password" class="form-control" name="password" v-model="password" placeholder="Enter new password." title="Enter your password."/>
                                    </div>
                                    <div class="form-group">
                                        <label for="password_confirmation">Confirm Password</label>
                                        <input id="password_confirmation" type="password" class="form-control" name="password_confirmation" v-model="password_confirmation" placeholder="Enter new password again." title="Enter your password again.">
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-theme width-80">Update</button>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer d-flex mt-4">
                                <div class="text-center mr-1">Update general settings? </div>
                                <a href="#" @click.prevent="security_tab = false" class="text-center text-theme">Change Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            divisions:[],
            regions: [],
            form: this.$store.getters.user,
            error: '',
            file:'',
            security_tab: false,
            password_old:'',
            password:'',
            password_confirmation:''
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
                    _this.error = "An error occurred. Check your internet connection."
                });
        },
        update: function () {
            var _this = this;
            var form = new FormData();
            if(this.file)
                form.append('photo', this.file);
            form.append('name', this.form.name);
            form.append('phone', this.form.phone);
            form.append('email', this.form.email);
            form.append('division_id', this.form.division_id);
            form.append('region_id', this.form.region_id);
            form.append('address', this.form.address);
            form.append('_method', 'put');
            axios.post('/admin/users/'+this.$store.getters.user.id, form)
                .then(function (response) {
                    _this.error = "Your profile has been updated successfully."
                })
                .catch(function (error) {
                    _this.error = "An error occurred. Check your internet connection."
                });
        },
        updatePassword: function () {
            var _this = this;
            var form = new FormData();
            form.append('password_old', this.password_old);
            form.append('password', this.password);
            form.append('password_confirmation', this.password_confirmation);
            form.append('_method', 'put');
            axios.post('/admin/users/'+this.$store.getters.user.id, form)
                .then(function (response) {
                    _this.error = "Your password has been updated successfully."
                })
                .catch(function (error) {
                    _this.error = "An error occurred. Check your internet connection."
                });
        },
        updateRegions: function () {
            var _this = this;
            console.log("hi");
            axios.get('/admin/get-regions-by-division/'+this.form.division_id)
                .then(function (response) {
                    _this.regions = response.data;
                })
                .catch(function (error) {
                    _this.error = "An error occurred. Check your internet connection."
                });
        },
        handleFileUpload: function(e) {
            this.file = this.$refs.file.files[0];
        }
    },
    mounted() {
        this.getLocation();
    }
}
</script>
