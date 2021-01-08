<template>
    <div class="vh-55 position-relative">
        <b-container fluid class="bg-image vh-95 scroll-y" ref="chat-history">
            <b-row class="mb-1" v-for="message in messages" v-if="message.receiver_id == user.id" :ref="message.id" :key="message.id">
                <div class="d-flex text-left bg-light rounded px-2">
                    <img :src="'/assets/profile/'+partner.photo" class="width-40 height-40" alt="Profile">
                    <div class="d-flex flex-nowrap align-items-center"><span class="mr-auto px-2">{{ message.message }}</span> <span class="font-10 text-secondary">{{ convertToDate(message.created_at) }}</span></div>
                </div>
            </b-row>
            <b-row class="flex-row-reverse mb-1" v-else :ref="message.id" :key="message.id">
                <div class="d-flex text-right bg-theme-light rounded px-2 text-theme">
                    <div class="d-flex flex-nowrap align-items-center">
                        <span class="mr-auto px-2">{{ message.message }}</span>
                        <span class="font-10 text-secondary height-40 nowrap line-height-40">{{ convertToDate(message.created_at) }}</span>
                        <i v-if="message.viewed_at" class="fa fa-check font-10"></i>
                        <i v-else-if="message.sent_at" class="fa fa-check-circle font-10"></i>
                        <i v-else-if="message.created_at" class="fa fa-circle-o font-10"></i>
                        <i v-else class="fa fa-spinner fa-spin font-10"></i>
                    </div>
                </div>
            </b-row>
        </b-container>
        <b-container fluid class="position-absolute left-0 bottom-0 right-0">
            <b-row class="text-input">
                <div ref="chat-whisper" class="bg-light height-30 line-height-30 px-2 d-none">Whisper</div>
                <div class="input-group">
                    <input type="text" ref="chat-input" class="form-control shadow-none border-0 height-40" placeholder="Write here" autofocus/>
                    <div class="input-group-append">
                        <button ref="chat-submit" class="input-group-text btn btn-theme cursor-pointer shadow-none" @click.prevent="sendText()">Send</button>
                    </div>
                </div>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    name:'chat',
    data () {
        return {
            error: this.error?this.error:'',
            user: this.$store.getters.user,
            partner: this.$store.getters.partner,
            messages: this.$store.getters.messages,
            message_list: this.$store.getters.message_list,
            typing: false
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
                return this.timeFormat(date);
            }
            return months[date.getMonth()]+' '+date.getDate();
        },
        timeFormat: function(date) {
            let today = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            hours += today.getTimezoneOffset()/60;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            let strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        },
        scrollToBottom: function() {
            let element = this.$refs["chat-history"];
            element.scrollTo(0, element.scrollHeight);
            this.focusInput();
        },
        focusInput: function() {
            if(this.$refs["chat-input"]) this.$refs["chat-input"].focus();
        },
        checkTyping: function() {
            let _this = this;
            let input = this.$refs["chat-input"];
            if(input)
                input.addEventListener("keyup", function(event){
                    _this.typing = event.currentTarget.value.length?true:false;
                    //_this.sendWhisper;
                }, true);
        },
        checkSubmit: function() {
            let _this = this;
            let input = this.$refs["chat-input"];
            let submit = this.$refs["chat-submit"];
            if(input)
                input.addEventListener("keypress", function(event){
                    if (event.key === 'Enter') {
                        _this.typing = false;
                        _this.sendText();
                    }
                });
            if(submit)
                submit.addEventListener("click", function(event){
                    _this.typing = false;
                    //_this.sendWhisper;
                    _this.sendText();
                });
        },
        sendText: function() {
            let input = this.$refs["chat-input"];
            let data;
            let id = this.getMilliSeconds();
            if(input.value) {
                data = {
                    "id":id,
                    "type":"text",
                    "message":input.value,
                    "sender_id":this.user.id,
                    "receiver_id":this.partner.id
                };
                this.updateMessage(data);
                input.value='';
                this.sendByAxios(data);
            }
        },
        sendByAxios: function(data) {
            let _this = this;
            let baseUrl = document.head.querySelector("[name='base-url']").getAttribute('content');
            axios.post(baseUrl+'/chats', data)
                .then(function(response) {
                    _this.sentToServer(response);
                })
                .catch(function(error) {
                });
        },
        updateMessage: function(e) {
            if(e.type == "text") {
                //this.$store.dispatch('changeMessage', e);
                if(e.sender_id != this.user.id && e.sender_id != this.partner.id) {
                    return;
                }
                this.messages.push({
                    "id":e.id,
                    "type":e.type,
                    "message":e.message,
                    "sender_id":e.sender_id,
                    "receiver_id":e.receiver_id,
                    "created_at":e.created_at
                });
                this.scrollToBottom();
            } else if(e.type == "received_notification") {
                this.updateReceivedNotification(e);
            } else if(e.type == "viewed_notification") {
                this.updateViewedNotification(e);
            }
            this.updateMessageList(e);
        },
        updateMessageList: function(data) {
            let partner_id = this.getPartnerId(data);
            let _this = this;
            let isExist = false;
            for(let i = 0; i<this.message_list.length; i++) {
                /* Here, the first condition is for the scenerio when a user first time send more than one message to anyone. */
                if(!this.message_list[i].sender || this.message_list[i].sender.id == partner_id || this.message_list[i].receiver.id == partner_id) {
                    _this.message_list[i].id = data.id;
                    _this.message_list[i].message = data.message;
                    _this.message_list[i].viewed_at = data.viewed_at;
                    isExist = true;
                    break;
                }
            }
            if(!isExist) {
                this.message_list.push(data);
            }
            if(this.message_list.length>1)
                this.message_list.sort((a, b) => { return b.id - a.id;});
        },
        getPartnerId: function(response) {
            if(response.sender_id == this.user.id)
                return response.receiver_id;
            return response.sender_id;
        },
        sentToServer: function(response) {
            if(typeof response.data == 'string') {
                this.error = response.data;
                return false;
            }
            let objIndex = this.messages.findIndex((obj => obj.id == response.data.client_id));
            this.messages[objIndex].created_at = response.data.created_at;
            this.messages[objIndex].id = response.data.server_id;
            this.scrollToBottom();
        },
        sendReceivedNotification: function(message) {
            if(message.type == 'text') {
                let data = {
                    "id":message.id,
                    "type":"received_notification",
                    "sender_id":message.receiver_id,
                    "receiver_id":message.sender_id,
                };
                this.sendByAxios(data);
            }
        },
        updateReceivedNotification: function(response) {
            let objIndex = this.messages.findIndex((obj => obj.id == response.id));
            /* sent_at is new property; thats why $set method */
            this.$set(this.messages[objIndex], 'sent_at', response.sent_at);
        },
        sendViewedNotification: function(message) {
            let data = {
                "id":message.id,
                "type":"viewed_notification",
                "sender_id":message.receiver_id,
                "receiver_id":message.sender_id
            };
            this.sendByAxios(data);
        },
        updateViewedNotification: function(response) {
            for(let i=0; i<this.messages.length; i++) {
                this.$set(this.messages[i], 'viewed_at', /*response.viewed_at*/true);
            }
        },
        pageVisitAllView: function() {
            let _this = this;
            let data = {
                "id":0,
                "sender_id":_this.partner.id,
                "receiver_id":_this.user.id
            };
            this.sendViewedNotification(data);
        },
        showWhispering: function(e) {
            let element = this.$refs['chat-whisper'];
            if(element)
                e.type == "whisper-start" ? element.classList.add('d-block') : element.classList.remove('d-block');
        },
        getMilliSeconds: function() {
            return (new Date()).getTime();
        },
        isElementVisible: function(el) {
            let rect = el.getBoundingClientRect(), top = rect.top, height = rect.height, parent = el.parentNode;
            do {
                rect = parent.getBoundingClientRect();
                if (top <= rect.bottom === false) return false;
                if ((top + height) <= rect.top) return false
                parent = parent.parentNode;
            } while (parent != document.body);
            return top <= document.documentElement.clientHeight;
        },
        attachEvent: function(element, event, callbackFunction) {
            if (element.addEventListener) {
                element.addEventListener(event, callbackFunction, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, callbackFunction);
            }
        },
        onScrollUpdate: function(){
            if(document.hasFocus() && this.lastMessage && this.lastMessage.sender_id!=this.user.id && !this.lastMessage.viewed_at && this.isElementVisible(this.$refs[this.lastMessage.id][0])) {
                this.lastMessage.viewed_at = this.getMilliSeconds();
                this.sendViewedNotification(this.lastMessage);
            }
        },
        isMessageViewed: function() {
            this.attachEvent(this.$refs["chat-history"], "scroll", this.onScrollUpdate);
            window.addEventListener('focus', this.onScrollUpdate);
            this.attachEvent(window, "resize", this.onScrollUpdate);
            this.onScrollUpdate();
        }
    },
    computed: {
        sendWhisper: function() {
            let _this = this;
            let type = this.typing? "whisper-start":"whisper-stop";
            let data = {"type":type, "message":"", "sender_id":this.user.id, "receiver_id":this.partner.id};
            let baseUrl = document.head.querySelector("[name='base-url']").getAttribute('content');
            axios.post(baseUrl+'/chats', data)
                .then(function(response) {

                })
                .catch(function(error) {
                    this.typing = false;
                });
        },
        lastMessage: function() {
            return this.messages[this.messages.length-1];
        }
    },
    mounted: function() {
        this.checkTyping();
        this.checkSubmit();
        this.isMessageViewed();
        this.$nextTick(() => {
            this.scrollToBottom();
        });

        this.pageVisitAllView();
        var _this = this;
        this.channel = Echo.private('Chat.'+_this.user.id)
            .listen('PrivateChatEvent', (e) => {
                _this.updateMessage(e);
                _this.sendReceivedNotification(e);
                _this.showWhispering(e);
            });

    }
}
</script>
