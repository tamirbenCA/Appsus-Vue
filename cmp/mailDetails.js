import mailPreview from '../cmp/mailPreview.js'
import mailService from '../services/mailService.js'
import EventBusService from '../services/EventBusService.js'


export default {
    template: `
        <section class="mailDetails" v-if="chosenMail" >
        <div class="head-mail">
            <h3 class="subject">{{chosenMail.subject}} </br></h3>   
            <h5 class="mail-info"> {{chosenMail.senderName}} </br>     </h5>   
            <h5 class="mail-info"> {{timeStampToDate}}</br></h5>
        </div>
         
         <div>
            <h5 class="mail-info"> {{chosenMail.senderMail}}</br></h5>  
            <h5 class="mail-info"> {{chosenMail.body}}</h5>  
            
         </div>
         <button  @click="emitDeleteMail(chosenMail.id)">Delete</button>
         
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
            console.log('hiiii')
            EventBusService.$emit('deleteMail', mailId)
            // this.mails = mailService.deleteMail(mailId);
        },
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



