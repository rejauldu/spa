<template>
    <b-container fluid>
        <b-row class="height-55 bg-theme navbar sticky-top">
            <a href="/" aria-current="page" class="h-100 bg-transparent router-link-exact-active active">
                <img src="/assets/logo-bold.png" class="width-230 h-100 d-none d-md-inline">
            </a>
            <button id="left-menu-toggle" class="btn btn-sm ml-md-3 border border-info">
                <svg width="25px" height="25px" viewBox="0 0 100 100" style="fill: rgb(68, 68, 68); stroke: rgb(68,68,68); display: inline-block; vertical-align: middle;">
                    <path d="m12 20v8h76v-8zm0 26v8h76v-8zm0 26v8h76v-8z"></path>
                </svg>
            </button>
            <div class="input-group w-100 mx-md-5 col">
                <input type="text" placeholder="Search.." class="form-control border-right-0 bg-theme-light text-theme focus-theme">
                <div class="input-group-append cursor-pointer">
                    <span class="input-group-text border-left-0 bg-theme-light px-2 px-md-3 px-lg-4">
                        <svg width="12px" height="12px" x="0px" y="0px" viewBox="0 0 100 100">
                            <path d="M44.5,78.5c-18.8,0-34-15.3-34-34s15.3-34,34-34s34,15.3,34,34S63.3,78.5,44.5,78.5z M44.5,18.1  C30,18.1,18.2,30,18.2,44.5S30,70.8,44.5,70.8S70.9,59,70.9,44.5S59,18.1,44.5,18.1z"></path>
                            <path d="M87.2,91c-1,0-2-0.4-2.7-1.1L63.1,68.5c-1.5-1.5-1.5-3.9,0-5.4s3.9-1.5,5.4,0l21.3,21.3  c1.5,1.5,1.5,3.9,0,5.4C89.2,90.6,88.2,91,87.2,91z"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <a href="/profile" class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="14">
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" fill="currentColor"></path>
                        </svg>
                        Profile
                    </a>
                    <a href="/logout" class="text-dark btn">
                        <svg viewBox="0 0 512 512" height="14">
                            <path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
                        </svg>
                        Logout
                    </a>
                </div>
            </div>
        </b-row>
        <b-row>
            <div id="left-menu">
                <div class="border">
                    <contacts></contacts>
                </div>
            </div>
            <div class="content-wrapper">
                <chat></chat>
            </div>
        </b-row>
    </b-container>
</template>
<script>
import contacts from "./contacts";
import chat from "./chat";
export default {
    name:'layout',
    components: {contacts, chat},
    created: function() {
        document.getElementById("page-loading").remove();
        this.$store.dispatch('updateUser', this.user);
        this.$store.dispatch('updatePartner', this.partner);
        this.$store.dispatch('updateMessages', this.messages);
        this.$store.dispatch('updateMessageList', this.message_list);
    },
    props: ['user', 'partner', 'messages', 'message_list', 'error']
}
</script>
