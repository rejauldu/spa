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
                <input type="text" @keyup="search" class="form-control border-right-0 bg-theme-light text-theme focus-theme" ref="search" placeholder="Search..">
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
            <div v-if="$store.state.width>=768">
                <div v-if="$store.state.isLoggedin">
                    <router-link to="/profile" class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                        Profile
                    </router-link>
                    <a href="/logout" @click.prevent="logout()" class="text-dark btn">
                        <svg viewBox="0 0 512 512" height="14">
                            <path fill="currentColor"
                                  d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
                        </svg>
                        Logout
                    </a>
                </div>
                <div v-else>
                    <router-link to="/login" class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 535.5 535.5" height="14">
                            <path d="M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51 v255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408 c-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51 c0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"/>
                        </svg>
                        Login
                    </router-link>
                    <router-link to="/register" class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                        Register
                    </router-link>
                </div>
            </div>
            <a href="#" @click.prevent="popover = !popover" v-else class="width-30 text-center">
                <svg height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>
            </a>
            <div v-if="popover" class="width-150 top-50 right-0 position-absolute bg-white border shadow-all text-center p-1">
                <div v-if="$store.state.isLoggedin">
                    <router-link to="/profile" class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                        Profile
                    </router-link>
                    <a href="/logout" @click.prevent="logout()" class="text-dark btn">
                        <svg viewBox="0 0 512 512" height="14">
                            <path fill="currentColor"
                                  d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
                        </svg>
                        Logout
                    </a>
                </div>
                <div v-else>
                    <router-link to="/login" class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 535.5 535.5" height="14">
                            <path d="M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51 v255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408 c-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51 c0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"/>
                        </svg>
                        Login
                    </router-link>
                    <router-link to="/register" class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                        Register
                    </router-link>
                </div>
            </div>
        </b-row>
        <b-row>
            <div id="left-menu">
                <div class="border">
                    <div class="display-6 p-3">
                        <router-link to="/" class="logo">Home</router-link>
                    </div>
                    <div class="list-group list-group-flush accordion" role="tablist">
                        <router-link to="/templates" class="list-group-item list-group-item-action py-1 border-0" role="tab">
                            <div v-b-toggle.templates>
                                <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>
                                HTML Templates
                                <span class="when-opened"></span>
                                <span class="when-closed"></span>
                            </div>
                        </router-link>
                        <b-collapse id="templates" accordion="my-accordion">
                            <div class="card-body p-0 pl-3">
                                <div class="list-group list-group-flush">
                                    <router-link to="/ecommerce" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Ecommerce</router-link>
                                    <router-link to="/restaurant" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Restaurant</router-link>
                                    <router-link to="/academic" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Academic</router-link>
                                    <router-link to="/profile" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Profile</router-link>
                                    <router-link to="/other" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Other</router-link>
                                </div>
                            </div>
                        </b-collapse>

                        <router-link to="/app" class="list-group-item list-group-item-action py-1 border-0" role="tab">
                            <div v-b-toggle.apps>
                                <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
                                Mobile App
                                <span class="when-opened"></span>
                                <span class="when-closed"></span>
                            </div>
                        </router-link>

                        <b-collapse id="apps" accordion="my-accordion">
                            <div class="card-body p-0 pl-3">
                                <div class="list-group list-group-flush">
                                    <router-link to="/android" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Android</router-link>
                                    <router-link to="/apple" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Apple</router-link>
                                </div>
                            </div>
                        </b-collapse>
                        <router-link to="/web-development" class="list-group-item list-group-item-action py-1 border-0">
                            <div v-b-toggle.web-development>
                                <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg>
                                Web development
                                <span class="when-opened"></span>
                                <span class="when-closed"></span>
                            </div>
                        </router-link>
                        <b-collapse id="web-development" accordion="my-accordion">
                            <div class="card-body p-0 pl-3">
                                <div class="list-group list-group-flush">
                                    <router-link to="/laravel" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Laravel</router-link>
                                    <router-link to="/nodejs" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">NodeJs</router-link>
                                    <router-link to="/bootstrap" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Bootstrap</router-link>
                                    <router-link to="/vuejs" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">VueJs</router-link>
                                    <router-link to="/react" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">React</router-link>
                                </div>
                            </div>
                        </b-collapse>
                        <router-link to="/server" class="list-group-item list-group-item-action py-1 border-0">
                            <div v-b-toggle.server>
                                <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
                                Server Management
                                <span class="when-opened"></span>
                                <span class="when-closed"></span>
                            </div>
                        </router-link>
                        <b-collapse id="server" accordion="my-accordion">
                            <div class="card-body p-0 pl-3">
                                <div class="list-group list-group-flush">
                                    <router-link to="/nginx" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Nginx</router-link>
                                    <router-link to="/apache" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Apache</router-link>
                                </div>
                            </div>
                        </b-collapse>
                        <router-link to="/speed-up" class="list-group-item list-group-item-action py-1 border-0">
                            <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>
                            Speed Up
                        </router-link>
                        <router-link to="/ecommerce" class="list-group-item list-group-item-action py-1 border-0">
                            <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                            Ecommerce
                        </router-link>
                        <router-link to="/bug-fixing" class="list-group-item list-group-item-action py-1 border-0">
                            <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"></path></svg>
                            Bug fixing
                        </router-link>
                        <router-link to="/wordpress" class="list-group-item list-group-item-action py-1 border-0">
                            <div v-b-toggle.wordpress>
                                <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"></path></svg>
                                WordPress
                                <span class="when-opened"></span>
                                <span class="when-closed"></span>
                            </div>
                        </router-link>
                        <b-collapse id="wordpress" accordion="my-accordion">
                            <div class="card-body p-0 pl-3">
                                <div class="list-group list-group-flush">
                                    <router-link to="/theme" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Theme Development</router-link>
                                    <router-link to="/plugin" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Plugin Development</router-link>
                                    <router-link to="/divi-theme" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Divi theme</router-link>
                                    <router-link to="/woocommerce" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Woocommerce</router-link>
                                    <router-link to="/shopify" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Shopify</router-link>
                                    <router-link to="/elementor" class="list-group-item list-group-item-action py-1 border-0 bg-transparent font-12">Elementor</router-link>
                                </div>
                            </div>
                        </b-collapse>
                        <router-link to="/payment" class="list-group-item list-group-item-action py-1 border-0">
                            <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"></path></svg>
                            Payment Solution
                        </router-link>
                        <router-link to="/graphic-design" class="list-group-item list-group-item-action py-1 border-0">
                            <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                            Graphic Design
                        </router-link>
                    </div>
                </div>
            </div>
            <b-container fluid class="content-wrapper">
                <b-row>
                    <router-view></router-view>
                </b-row>
                <b-row class="text-center border bg-theme p-5 border-0 text-white text-justify">
                    <b-col cols="6" md="4" lg="2">
                        <div class="text-center"><img src="/assets/layout/footer1.webp" /></div>
                        <div class="text-justify excerpt">FREE delivery with orders over $35! All year round</div>
                    </b-col>
                    <b-col cols="6" md="4" lg="2">
                        <div class="text-center"><img src="/assets/layout/footer2.webp" /></div>
                        <div class="text-justify excerpt">Earn points on every purchase and benefit from members-only promotions</div>
                    </b-col>
                    <b-col cols="6" md="4" lg="2">
                        <div class="text-center"><img src="/assets/layout/footer3.webp" /></div>
                        <div class="text-justify excerpt">Missing any pieces or instructions? Let us know and we’ll deliver it to you.</div>
                    </b-col>
                    <b-col cols="6" md="4" lg="2">
                        <div class="text-center"><img src="/assets/layout/footer1.webp" /></div>
                        <div class="text-justify excerpt">FREE delivery with orders over $35! All year round</div>
                    </b-col>
                    <b-col cols="6" md="4" lg="2">
                        <div class="text-center"><img src="/assets/layout/footer2.webp" /></div>
                        <div class="text-justify excerpt">Earn points on every purchase and benefit from members-only promotions</div>
                    </b-col>
                    <b-col cols="6" md="4" lg="2">
                        <div class="text-center"><img src="/assets/layout/footer3.webp" /></div>
                        <div class="text-justify excerpt">Missing any pieces or instructions? Let us know and we’ll deliver it to you.</div>
                    </b-col>
                </b-row>
                <b-row class="bg-dark text-white py-4">
                    <b-col cols="12" lg="9">
                        <b-row>
                            <b-col cols="12" lg="6" class="py-3">
                                <b-row>
                                    <b-col cols="4" sm="2" md="1" lg="3" xl="2" class="pr-0"><img src="/assets/layout/support.webp"  class="w-100"></b-col>
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
                    <b-col cols="12" lg="3" class="py-3 text-center" :class="{'border-left': $store.state.width>=992}">
                        <h5>FOLLOW US</h5>
                        <p>
                            <a href="https://facebook.com/onbiponi" class="text-facebook mx-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="30"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a>
                            <a href="https://twitter.com/onbiponi" class="text-twitter mx-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="30"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a>
                            <a href="https://youtube.com/onbiponi" class="text-youtube mx-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="30"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></a>
                            <a href="https://instagram.com/onbiponi" class="text-instagram mx-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="30"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>
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
        <router-link to="/cart" class="d-flex flex-column align-content-stretch position-center-v position-fixed right-0 z-index-999 width-60 bg-white shadow-all rounded overflow-hidden cursor-pointer hover-opacity-8 text-decoration-none">
            <div class="bg-dark text-center py-1">
                <img src="/assets/layout/cart.png" class="width-40" />
            </div>
            <div class="text-center py-2 alert-light">
                3 items
            </div>
        </router-link>
        <b-toast id="added-to-bag" variant="warning" solid>
            <div class="border border-danger d-flex justify-content-center align-items-center position-fixed left-0 top-0 right-0 z-index-9999 w-100 alert-warning shadow-lg">
                <div><img src="/assets/images/bag.png" class="width-30"/></div>
                <div class="px-4">Product added to bag</div>
            </div>
        </b-toast>
    </b-container>
</template>
<script>
import router from '../router'
import store from '../store'

export default {
    data() {
        return {
            popover: false
        }
    },
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
        },
        search: function (e) {
            var _this = this;
            this.delay(function (e) {
                var value = _this.$refs.search.value;
                if(!(_this.$route.path == '/' && value.length == 0) && (_this.$route.path !== '/search/'+value)) {
                    router.replace({name: 'search', params: {query:value} });
                }
            }, 200)();
        },
        delay: function (fn, ms) {
            let timer = 0
            return function(...args) {
                clearTimeout(timer)
                timer = setTimeout(fn.bind(this, ...args), ms || 0)
            }
        }
    },
    mounted() {
        document.getElementById("page-loading").remove();
        this.getUser();
    }
}
</script>
<style>
.modal-backdrop {
    background: #000A;
}
@media only screen and (max-width: 768px) {
    .modal {
        padding: 0 !important; /* override inline padding-right added from js */
    }
    .modal .modal-dialog {
        width: 100%;
        max-width: none;
        height: 100%;
        margin: 0;
    }
    .modal .modal-content {
        height: 100%;
        border: 0;
        border-radius: 0;
    }
    .modal .modal-body {
        overflow-y: auto;
    }
}

.when-opened, .when-closed {
    float:right;
    width: 14px;
    height: 22px;
}
.collapsed > .when-opened, :not(.collapsed) > .when-closed {
    display: none;
}
.when-closed:before {
    content:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path d='M100 100 l-100 -100 l5 -5 l105 105 l-105 105 l-5 -5 z' /></svg>");
    display: inline-block;
    width:14px;
    height:14px;
}
.when-opened:before {
    content: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path d='M100 100 l100 -100 l5 5 l-105 105 l-105 -105 l5 -5 z' /></svg>");
    display: inline-block;
    width:14px;
    height:14px;
}
.fa.fa-info-circle:before {
    content: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='gray' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg>");
    display: inline-block;
    width:14px;
    height:14px;
}
.bg-skeleton {
    background: #FFF url("/assets/images/skeleton.gif") no-repeat left top;
    background-size: 100% 100%;
}
</style>
