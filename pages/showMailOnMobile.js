import mailService from '../services/mailService.js';

export default {

    template: `
        <section >
            <div class="mobile-page">
                <router-link to="/mail/main/" > 
                    <i class="fa fa-times-circle-o" aria-hidden="true" ></i>
                </router-link>  
            
                <div class="head-mail">
                    <h3 class="subject">{{chosenMail.subject}} </h3>
                    <h5 class="mail-info"> {{chosenMail.senderName}} </h5>  
                    <h5 class="mail-info"> {{timeStampToDate}}</br> </h5>
                    <h5 class="mail-info"> {{chosenMail.senderMail}} </h5>
                    <div class="icons-on-mobile">
                        <i class="fa fa-reply-all" aria-hidden="true"></i>
                        <i class="fa fa-envelope" aria-hidden="true" @click="markUnread(chosenMail)"></i>
                        <i class="fa fa-trash-o" aria-hidden="true"  @click="emitDeleteMail(chosenMail.id)"></i>
                    </div>
                </div>
            
                <div>
                    <h5 class="mail-info"> {{chosenMail.body}}</h5>  
                </div>
            </div>
        </section>
        `,
    data() {
        return {
            chosenMail: {},

        }
    },
    created() {
        var mailId = this.$route.params.mailId;
        mailService.getMailById(mailId)
        .then(mail => {
            this.chosenMail = Object.assign({}, mail)
            // console.log(' this.chosenMail', this.chosenMail)
           
        })     
    },
    methods: {
        emitDeleteMail(mailId) {
            console.log('hiiii')
            EventBusService.$emit('deleteMail', mailId)
 
        },
        markUnread(chosenMail) {
            chosenMail.isRead = false;
            mailService.updateMailStatus(chosenMail)
        },
      
    },
    computed: {
        timeStampToDate() {
            var d = new Date(this.chosenMail.timeStamp)
            return d.toLocaleString('en-GB');
        }
    },
}

