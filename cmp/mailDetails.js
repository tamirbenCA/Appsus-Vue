import mailPreview from '../cmp/mailPreview.js'

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
            <i class="fa fa-trash-o" aria-hidden="true"  ></i>
         </div>
         <button  @click="deleteMail(chosenMail.id)">Delete</button>
         
        </section>
    `,
    props: ['chosen-mail'],
    data() {
        return {
            mailId: this.chosenMail ? this.chosenMail.id : null
 
        }
    },
    methods: {
        deleteMail(chosenMailId) {
            console.log('chosenMailId',chosenMailId)
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



