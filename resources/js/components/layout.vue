<template>
    <b-container fluid>
        <b-row class="height-55 bg-theme navbar sticky-top">
            <router-link to="/" class="h-100 bg-transparent"><img src="/assets/logo-bold.png"
                                                                  class="width-230 h-100 d-none d-md-inline"/>
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
							<svg style="fill:#444444;stroke:#444444;display:inline-block;vertical-align:middle;"
                                 width="12px" height="12px" x="0px" y="0px" viewBox="0 0 100 100"><path
                                d="M44.5,78.5c-18.8,0-34-15.3-34-34s15.3-34,34-34s34,15.3,34,34S63.3,78.5,44.5,78.5z M44.5,18.1  C30,18.1,18.2,30,18.2,44.5S30,70.8,44.5,70.8S70.9,59,70.9,44.5S59,18.1,44.5,18.1z"></path><path
                                d="M87.2,91c-1,0-2-0.4-2.7-1.1L63.1,68.5c-1.5-1.5-1.5-3.9,0-5.4s3.9-1.5,5.4,0l21.3,21.3  c1.5,1.5,1.5,3.9,0,5.4C89.2,90.6,88.2,91,87.2,91z"></path></svg>
						</span>
                    </div>
                </div>
            <router-link to="/login" class="btn border border-info mr-md-3" v-if="!$store.state.isLoggedin">
                <svg x="0px" y="0px" viewBox="0 0 535.5 535.5"
                     style="fill:#444444;stroke:#444444;display:inline-block;vertical-align:middle;" width="12px"
                     height="12px">
                    <g id="lock">
                        <path d="M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51
							v255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408
							c-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51
							c0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"/>
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
                <b-row class="bg-light text-center border mt-5">
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
                            <router-link to="tel:8801924974960"
                                         class="list-group-item border-0 py-1 bg-transparent text-theme">
                                <svg viewBox="0 -256 1792 1792" height="14">
                                    <g transform="matrix(1,0,0,-1,159.45763,1293.0169)">
                                        <path
                                            d="m 1408,296 q 0,-27 -10,-70.5 Q 1388,182 1377,157 1356,107 1255,51 1161,0 1069,0 1042,0 1016.5,3.5 991,7 959,16 927,25 911.5,30.5 896,36 856,51 816,66 807,69 709,104 632,152 504,231 367.5,367.5 231,504 152,632 104,709 69,807 66,816 51,856 36,896 30.5,911.5 25,927 16,959 7,991 3.5,1016.5 0,1042 0,1069 q 0,92 51,186 56,101 106,122 25,11 68.5,21 43.5,10 70.5,10 14,0 21,-3 18,-6 53,-76 11,-19 30,-54 19,-35 35,-63.5 16,-28.5 31,-53.5 3,-4 17.5,-25 14.5,-21 21.5,-35.5 7,-14.5 7,-28.5 0,-20 -28.5,-50 -28.5,-30 -62,-55 -33.5,-25 -62,-53 -28.5,-28 -28.5,-46 0,-9 5,-22.5 5,-13.5 8.5,-20.5 3.5,-7 14,-24 10.5,-17 11.5,-19 76,-137 174,-235 98,-98 235,-174 2,-1 19,-11.5 17,-10.5 24,-14 7,-3.5 20.5,-8.5 13.5,-5 22.5,-5 18,0 46,28.5 28,28.5 53,62 25,33.5 55,62 30,28.5 50,28.5 14,0 28.5,-7 14.5,-7 35.5,-21.5 21,-14.5 25,-17.5 25,-15 53.5,-31 28.5,-16 63.5,-35 35,-19 54,-30 70,-35 76,-53 3,-7 3,-21 z"
                                            inkscape:connector-curvature="0"
                                            style="fill:currentColor"/>
                                    </g>
                                </svg>
                                01924974960
                            </router-link>
                            <router-link to="mailto:rejauldu@gmail.com"
                                         class="list-group-item border-0 py-1 bg-transparent text-theme">
                                <svg viewBox="0 0 512 512" height="14">
                                    <path fill="currentColor"
                                          d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                                </svg>
                                rejauldu@gmail.com
                            </router-link>
                        </div>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-row>
                            <b-col cols="12" xl="6" class="text-xl-right py-1 py-xl-3">
                                <router-link to="/google"
                                             class="height-50 border rounded d-flex p-1 text-left text-light bg-dark-transparent text-decoration-none width-150">
                                    <svg viewBox="0 0 512 512" height="40">
                                        <path fill="currentColor"
                                              d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                                    </svg>
                                    <div class="height-40 w-100 ml-2">
                                        <div class="line-height-10 height-10 font-10">Android App on</div>
                                        <div class="height-16 line-height-16 font-weight-bold">Google paly</div>
                                    </div>
                                </router-link>
                            </b-col>
                            <b-col cols="12" xl="6" class="text-xl-left py-1 py-xl-3">
                                <router-link to="/apple"
                                             class="height-50 border rounded d-flex p-1 text-left text-light bg-dark-transparent text-decoration-none width-150">
                                    <svg viewBox="0 0 384 512" height="40">
                                        <path fill="currentColor"
                                              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                                    </svg>
                                    <div class="height-40 w-100 ml-2">
                                        <div class="line-height-10 height-10 font-10">Available on</div>
                                        <div class="height-16 line-height-16 font-weight-bold">App Store</div>
                                    </div>
                                </router-link>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </b-row>
        <b-row v-if="$store.getters.isLoading" class="w-100 vh overflow-hidden bg-dark-transparent position-fixed top-0 left-0 right-0 z-index">
            <i class="position-center text-white">
                <svg class="r-spin" height="100" xmlns="http://www.w3.org/2000/svg" width="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
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
                    if (response && response.data) {
                        store.dispatch("setUser", response.data);
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
                    router.push({ name: 'login'});
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
