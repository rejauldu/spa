<template>
    <b-container fluid>
        <b-row class="height-55 bg-theme navbar sticky-top">
            <router-link to="/" class="h-100 bg-transparent">
                <img src="/assets/logo-bold.png" class="width-230 h-100 d-none d-md-inline"/>
            </router-link>
            <button id="left-menu-toggle" class="btn btn-sm ml-md-3 border border-info">
                <svg style="fill:#444444;stroke:#444444;display:inline-block;vertical-align:middle;" width="25px"
                     height="25px" viewBox="0 0 100 100">
                    <path d="m12 20v8h76v-8zm0 26v8h76v-8zm0 26v8h76v-8z"></path>
                </svg>
            </button>
            <div class="input-group w-100 mx-md-5 col">
                <input type="text" class="form-control border-right-0 bg-theme-light text-theme focus-theme"
                       placeholder="Search..">
                <div class="input-group-append cursor-pointer">
						<span class="input-group-text border-left-0 bg-theme-light px-2 px-md-3 px-lg-4">
							<svg width="12px" height="12px" x="0px" y="0px" viewBox="0 0 100 100">
                                <path
                                    d="M44.5,78.5c-18.8,0-34-15.3-34-34s15.3-34,34-34s34,15.3,34,34S63.3,78.5,44.5,78.5z M44.5,18.1  C30,18.1,18.2,30,18.2,44.5S30,70.8,44.5,70.8S70.9,59,70.9,44.5S59,18.1,44.5,18.1z"></path>
                                <path
                                    d="M87.2,91c-1,0-2-0.4-2.7-1.1L63.1,68.5c-1.5-1.5-1.5-3.9,0-5.4s3.9-1.5,5.4,0l21.3,21.3  c1.5,1.5,1.5,3.9,0,5.4C89.2,90.6,88.2,91,87.2,91z"></path>
                            </svg>
						</span>
                </div>
            </div>
            <router-link to="/login" class="btn border border-info mr-md-3" v-if="!$store.state.isLoggedin">
                <svg x="0px" y="0px" viewBox="0 0 535.5 535.5"
                     style="fill:#444444;stroke:#444444;display:inline-block;vertical-align:middle;" width="12px"
                     height="12px">
                    <g id="lock">
                        <path
                            d="M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51 v255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408 c-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51 c0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"/>
                    </g>
                </svg>
                Login
            </router-link>
            <a href="/logout" @click.prevent="logout()" class="text-dark" v-else>
                <svg viewBox="0 0 512 512" height="14">
                    <path fill="currentColor"
                          d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
                </svg>
                Logout
            </a>
        </b-row>
        <b-row>
            <div id="left-menu">
                <div class="border">
                    <div class="display-6 p-3">
                        <router-link to="/offers" class="logo">Offers</router-link>
                    </div>
                    <div class="list-group list-group-flush">
                        <router-link to="/nctb" class="list-group-item list-group-item-action">NCTB</router-link>
                        <router-link to="/job" class="list-group-item list-group-item-action">Job</router-link>
                        <router-link to="/literature" class="list-group-item list-group-item-action">Literature
                        </router-link>
                        <router-link to="/higher-study" class="list-group-item list-group-item-action">Higher Study
                        </router-link>
                        <router-link to="/academic" class="list-group-item list-group-item-action">Academic
                        </router-link>
                    </div>
                </div>
            </div>
            <b-container fluid class="content-wrapper">
                <b-row>
                    <router-view></router-view>
                </b-row>
                <b-row class="text-center border">
                    <b-col cols="12" md="4">
                        <div class="list-group">
                            <router-link to="/register" class="list-group-item border-0 py-1 bg-transparent text-theme">
                                Sign-up
                            </router-link>
                            <router-link to="/about-us" class="list-group-item border-0 py-1 bg-transparent text-theme">
                                About Us
                            </router-link>
                            <router-link to="/terms-of-services"
                                         class="list-group-item border-0 py-1 bg-transparent text-theme">Terms of
                                Services
                            </router-link>
                        </div>
                    </b-col>
                    <b-col cols="12" md="4">
                        <div class="list-group">
                            <router-link to="tel:8801924974960" class="list-group-item border-0 py-1 bg-transparent text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="14"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                                01924974960
                            </router-link>
                            <router-link to="mailto:rejauldu@gmail.com" class="list-group-item border-0 py-1 bg-transparent text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="14"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                rejauldu@gmail.com
                            </router-link>
                        </div>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-row>
                            <b-col cols="12" xl="6" class="text-xl-right py-1 py-xl-3">
                            </b-col>
                            <b-col cols="12" xl="6" class="text-xl-left py-1 py-xl-3">
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="bg-dark-transparent text-white py-4">
                    <b-col cols="12" lg="9">
                        <b-row>
                            <b-col cols="12" lg="6" class="py-3">
                                <b-row>
                                    <b-col cols="4" sm="2" md="1" lg="3" xl="2" class="pr-0"><img src="assets/home/support.webp"  class="w-100"></b-col>
                                    <b-col cols="8" sm="10" md="11" lg="9" xl="10">
                                        <h5>NEED SUPPORT? CONTACT US</h5>
                                        <div>Our dedicated ONBIPONI<sup><small>®</small></sup> experts are here to help</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="14"><path fill="currentColor" d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"></path></svg> <router-link to="/contact-us" class="text-white">Contact Us</router-link>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col cols="12" lg="6" class="py-3">
                                <h5>SUBSCRIBE TO ONBIPONI<sup><small>®</small></sup> SHOP EMAILS</h5>
                                <div class="input-group">
                                    <input type="text" class="form-control height-40" placeholder="Your Email">
                                    <div class="input-group-append">
                                        <span class="input-group-text bg-white text-black height-40">Subscribe</span>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                    <hr class="w-100 border-light d-lg-none"/>
                    <b-col cols="12" lg="3" class="py-3" :class="{'border-left': $store.state.width>=992}">
                        <h5>FOLLOW US</h5>
                        <p>
                            <router-link to="https://facebook.com/onbiponi" class="text-facebook mx-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="30"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></router-link>
                            <router-link to="https://twitter.com/onbiponi" class="text-twitter mx-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="30"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></router-link>
                            <router-link to="https://youtube.com/onbiponi" class="text-youtube mx-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="30"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></router-link>
                            <router-link to="https://instagram.com/onbiponi" class="text-instagram mx-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="30"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></router-link>
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </b-row>
        <b-row v-if="$store.getters.isLoading" class="vh overflow-hidden bg-dark-transparent position-fixed top-0 left-0 right-0 z-index-9999">
            <i class="position-center text-white">
                <svg class="r-spin" height="100" xmlns="http://www.w3.org/2000/svg" width="200px" viewBox="0 0 100 100"
                     preserveAspectRatio="xMidYMid">
                    <path fill="currentColor" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"></path>
                </svg>
            </i>
            <i class="position-center text-white">
                <svg viewBox="0 0 535.5 535.5" width="32px">
                    <g id="lock">
                        <path fill="currentColor" d="M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51
							v255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408
							c-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51
							c0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"/>
                    </g>
                </svg>
            </i>
        </b-row>
    </b-container>
</template>
<script>
import router from '../router'
import store from '../store'

export default {
    methods: {
        getUser: function () {
            axios.get('/api/user')
                .then(function (response) {
                    if (response.data && response.data.status_code == 200) {
                        store.dispatch("setUser", response.data);
                    } else if(response.data && response.data.status_code == 401) {
                        store.dispatch("changeLogin", "1");
                    } else {
                        store.dispatch("changeLogin", "0");
                    }
                })
                .catch(function (error) {
                    store.dispatch("changeLogin", "0");
                });
        },
        logout: function () {
            store.dispatch("changeLoading", true);
            axios.post('/api/logout')
                .then(function (response) {
                    store.dispatch("logout");
                    router.push({name: 'login'});
                })
                .catch(function (error) {
                    store.dispatch("changeLogin", "1");
                    store.dispatch("changeLoading", false);
                });
        }
    },
    mounted() {
        this.getUser();
    }
}
</script>
