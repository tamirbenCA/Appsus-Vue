import mailPreview from '../cmp/mailPreview.js'
import mailService from '../services/mailService.js'
import EventBusService from '../services/EventBusService.js'


export default {
    template: `
        <section class="mailDetails" v-if="chosenMail">  
            <div class="head-mail">
                <div>
                    <h3 class="subject">{{chosenMail.subject}} </br></h3>   
                    <h5 class="mail-info"> {{chosenMail.senderName}} </br>     </h5>   
                    <h5 class="mail-info"> {{timeStampToDate}}</br></h5>
                    <h5 class="mail-info"> {{chosenMail.senderMail}}</br></h5>
                </div>
                <div class="icons-on-mobile">
                <i class="fa fa-reply-all" aria-hidden="true" @click="replyMail(chosenMail.id)"></i>  
                <i class="fa fa-envelope" aria-hidden="true" @click="markUnread(chosenMail)"></i>
                <i class="fa fa-trash-o" aria-hidden="true"  @click="emitDeleteMail(chosenMail.id)"></i>
                
            </div>
            </div>
         <div>
            <h5 class="mail-info"> {{chosenMail.body}}</h5>  
         </div>
        
         
         
        </section>
    `,
    props: ['chosen-mail'],
    data() {
        return {
            mailId: this.chosenMail ? this.chosenMail.id : null
        }
    },
    methods: {
        emitDeleteMail(mailId) {
            EventBusService.$emit('deleteMail', mailId)
            
        },
        markUnread(chosenMail) {
            chosenMail.isRead = false;
            mailService.updateMailStatus(chosenMail)
        },
        replyMail(chosenMailId) {
            // console.log('reply to', chosenMailId)
            this.$router.push('/mail/replyMail/' + chosenMailId)
        }
    
    },
    computed: {
        timeStampToDate() {
            var d = new Date(this.chosenMail.timeStamp)
            return d.toLocaleString('en-GB');
        }
    },
    components: {
        mailPreview
    }
}



