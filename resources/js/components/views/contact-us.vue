<template>
<b-container fluid class="vh-55-min">
    <b-row class="bg-light p-5">
        <b-container>
            <b-row class="alert alert-secondary text-justify">
                <b-col cols="12" md="2" xl="1" class="d-none d-md-block">
                    <svg class="position-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
                </b-col>
                <b-col cols="12" md="10" xl="11">
                        As we’re receiving high volumes of orders, parcels are taking up to a week to leave our warehouse. We’ll send you an email once your order has shipped. When checking your order status, it may take a few days after your order ships for the first update to be available online and it’s normal to see "Pending" or "Processing" until then.
                </b-col>
            </b-row>
        </b-container>
    </b-row>
    <b-row>
        <b-col cols="12" xl="8" class="bg-contact-us py-5 p-xl-5">
            <b-container>
                <b-row class="alert alert-secondary d-flex flex-nowrap justify-content-center align-items-center hover-opacity-8 cursor-pointer" v-b-modal.email>
                    <div class="pr-2 hover-opacity-5">
                        <svg height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
                    </div>
                    <div class="flex-grow-1">
                        <h3>Email Us</h3>
                        <div>Send us an email and we will get back to you as soon as possible</div>
                    </div>
                    <div class="pl-2">
                        <svg height="50" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110 200'><path d='M100 100 l-100 -100 l5 -5 l105 105 l-105 105 l-5 -5 z' /></svg>
                    </div>
                </b-row>
                <a href="/chats/1" class="row text-decoration-none alert alert-secondary d-flex flex-nowrap justify-content-center align-items-center hover-opacity-8 cursor-pointer" v-if="$store.getters.isLoggedin">
                    <div class="pr-2 hover-opacity-5">
                        <svg height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>
                    </div>
                    <div class="flex-grow-1">
                        <h3>Chat with us</h3>
                        <div>Chat to our friendly OnBiponi experts online. </div>
                    </div>
                    <div class="pl-2">
                        <svg height="50" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110 200'><path d='M100 100 l-100 -100 l5 -5 l105 105 l-105 105 l-5 -5 z' /></svg>
                    </div>
                </a>
                <b-row class="alert alert-secondary d-flex flex-nowrap justify-content-center align-items-center hover-opacity-8 cursor-pointer" v-b-modal.chat v-else>
                    <div class="pr-2 hover-opacity-5">
                        <svg height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>
                    </div>
                    <div class="flex-grow-1">
                        <h3>Chat with us</h3>
                        <div>Chat to our friendly OnBiponi experts online. </div>
                    </div>
                    <div class="pl-2">
                        <svg height="50" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110 200'><path d='M100 100 l-100 -100 l5 -5 l105 105 l-105 105 l-5 -5 z' /></svg>
                    </div>
                </b-row>
                <b-row>
                    <b-col cols="12" xl="6" class="pr-xl-4">
                        <b-row class="alert alert-secondary d-flex flex-nowrap justify-content-center align-items-center hover-opacity-8 cursor-pointer" v-b-modal.call>
                            <div class="pr-2 hover-opacity-5">
                                <svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                            </div>
                            <div class="flex-grow-1">
                                <h3>Call us</h3>
                            </div>
                            <div class="pl-2">
                                <svg height="20" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110 200'><path d='M100 100 l-100 -100 l5 -5 l105 105 l-105 105 l-5 -5 z' /></svg>
                            </div>
                        </b-row>
                    </b-col>
                    <b-col cols="12" xl="6" class="pl-xl-4">
                        <b-row class="alert alert-secondary d-flex flex-nowrap justify-content-center align-items-center hover-opacity-8 cursor-pointer" v-b-modal.mail>
                            <div class="pr-2 hover-opacity-5">
                                <svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"></path></svg>
                            </div>
                            <div class="flex-grow-1">
                                <h3>Mail us</h3>
                            </div>
                            <div class="pl-2">
                                <svg height="20" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110 200'><path d='M100 100 l-100 -100 l5 -5 l105 105 l-105 105 l-5 -5 z' /></svg>
                            </div>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </b-col>
        <b-col cols="12" xl="4" class="d-flex flex-nowrap justify-content-center align-items-center hover-opacity-8 cursor-pointer text-center">
            <div class="m-4">
                <h3>How is our service?</h3>
                <svg height="200" viewBox="0 0 40 40" title="Although we’re receiving a very high number of requests from our customers right now, we’re working hard to respond quickly.">
                    <circle cx="20" cy="20" r="15" fill="transparent" stroke="#EEEEEE" stroke-width="8"></circle>
                    <circle cx="20" cy="20" r="15" fill="transparent" stroke="red" stroke-width="8" stroke-dasharray="75 25" stroke-dashoffset="25"></circle>
                </svg>
                <div>Busy!</div>
                <div>We’re very busy taking calls and answering chats. We recommend you to send email instead of call or chatting.</div>
            </div>
        </b-col>
    </b-row>
    <div>
        <!-- The modal -->
        <b-modal centered id="email" ok-only @ok="sendMail">
            <div class="alert alert-danger">We usually respond within 2 working days</div>
            <div class="form-group">
                <label for="subject">Name:</label>
                <input type="text" class="form-control" placeholder="Name" id="name" autofocus v-model="email.name">
            </div>
            <div class="form-group">
                <label for="sender">Email:</label>
                <input type="email" class="form-control" placeholder="Email" id="sender" autofocus v-model="email.sender">
            </div>
            <div class="form-group">
                <label for="subject">Subject:</label>
                <input type="text" class="form-control" placeholder="Subject" id="subject" autofocus v-model="email.subject">
            </div>
            <div class="form-group">
                <label for="body">Message:</label>
                <textarea class="form-control" rows="5" id="body" placeholder="Write your message in short" v-model="email.body"></textarea>
            </div>
        </b-modal>
        <b-modal centered id="chat" ok-only>
            Please ligin to chat to our friendly OnBiponi experts online. <router-link to="/login">Login</router-link>
        </b-modal>
        <b-modal centered id="call" ok-only>
            <h3>OnBiponi® Customer Service</h3>
            <a href="tel:8801924974960">+8801924974960</a>
            <div>Monday to Friday 8am - 10pm BST</div>
            <div>Saturday and Sunday 10am - 6pm BST</div>
        </b-modal>
        <b-modal centered id="mail" ok-only>
            Flat-7B, 207/3 Azimpur, Lalbag Road, Dhaka-1211, Bangladesh.
        </b-modal>
        <b-modal centered id="thank-you-modal" ok-only>
            <h3>Thank you!</h3>
            <p>We have received your email. We will contact you as short as possible.</p>
        </b-modal>
    </div>
</b-container>
</template>

<script>
import store from "../../store";

export default {
name: "contact-us",
    data() {
        return {
            email: {name:'', sender:'', subject:'', body:''}
        }
    },
    methods: {
        sendMail: function () {
            store.dispatch("changeLogin", "1");
            axios.post('/admin/email', this.email)
                .then(function (response) {
                    store.dispatch("changeLogin", "0");
                    this.$bvModal.show('thank-you-modal');
                })
                .catch(function (error) {
                    store.dispatch("changeLogin", "0");
                });
        }
    }
}
</script>
<style scoped>
.bg-contact-us {
    background: url("/assets/images/contact-us.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>
