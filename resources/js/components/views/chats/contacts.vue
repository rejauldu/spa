<template>
<b-container fluid class="scroll-y h-100 scrollbar-secondary">
    <b-row class="alert-light flex-nowrap border-bottom cursor-pointer" v-for="message in messages" :key="message.id" v-if="searched(getPartner(message))" :class="{ 'alert-theme': getPartnerId(message) == partner.id, 'alert-secondary font-weight-bold': isHighlight(message)}"  @click="chatListClick" :partner="getPartner(message).id">
        <img :src="'/assets/profile/'+getPartner(message).photo" class="width-64 height-64 rounded-circle border"/>
        <div class="width-150 px-3">
            <div class="excerpt">{{ getPartner(message).name }}</div>
            <div class="font-12 excerpt">{{ message.message }}</div>
            <div class="d-flex flex-nowrap font-10">
                <div class="mr-auto">...</div>
                <div>{{ convertToDate(message.created_at) }}</div>
            </div>
        </div>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "chatList",
    data () {
        return {
            user: this.$store.getters.user,
            partner: this.$store.getters.partner,
            messages: this.$store.getters.message_list,
            search: ''
        }
    },
    methods: {
        convertToDate: function(d) {
            if(!d)
                return '';
            var date = new Date(d);
            var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var day = date.getDay();
            var today = new Date();
            if(today.getDate() == date.getDate() && today.getMonth() == date.getMonth() && today.getFullYear() == date.getFullYear()) {
                return 'Today';
            }
            return months[date.getMonth()]+' '+date.getDate();
        },
        onlineUpdateUser:function(users) {
            this.users = users;
        },
        isOnline:function(message) {
            let objIndex = this.users.findIndex((obj => obj.id == this.getPartnerId(message)));
            return objIndex > -1 ? true : false;
        },
        getPartner: function(message) {
            if(!message.sender)
                return this.partner;
            if(message.sender.id == this.user.id)
                return message.receiver;
            return message.sender;
        },
        getPartnerId: function(response) {
            if(response.sender_id == this.user.id)
                return response.receiver_id;
            return response.sender_id;
        },
        chatListClick: function(e) {
            let popover = e.target.getAttribute('data-toggle');
            let baseUrl = document.head.querySelector("[name='base-url']").getAttribute('content');
            if(popover !== "popover") {
                window.location.replace(baseUrl+'/chats/'+e.currentTarget.getAttribute('partner'));
            } else {

            }
        },
        searched: function(user) {
            var name = user.name.toUpperCase();
            var string = this.search.toUpperCase();
            if(!this.search || name.includes(string)) {
                return true;
            }
            return false;
        },
        isHighlight: function(message) {
            return !message.viewed_at && message.sender_id != this.user.id && message.sender_id != this.partner.id;
        }
    },
    created() {
        // this.$eventBus.$on('message', this.messageReceived);
        // this.$eventBus.$on('users', this.onlineUpdateUser);
    }
}
</script>

<style scoped>

</style>
