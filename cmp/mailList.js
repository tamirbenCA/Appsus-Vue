import mailPreview from '../cmp/mailPreview.js'
import mailService from '../services/mailService.js';


export default {
    template: `
        <section class="mails-list">
            <ul>
                <li class= "mail-row" v-for="mail in mails" @click="mailClicked(mail)" >
                    <i  class="fa fa-chevron-right" aria-hidden="true" @click="mailClicked(mail)" ></i>
                    <mail-preview :item="mail"  >
                    </mail-preview>
                    <!-- <img :src="mail.jpg" :alt="mailImage"> -->
                </li>
            </ul>  
        </section>
    `,
    methods: {
        mailClicked(mail) {
            if(mail.isRead === false) {
                mail.isRead = true;
                mailService.updateMailStatus(mail);
            }    
            this.$emit('presentMail', mail)
            // console.log('mailId',mailId)
            if (screen.width <= 480) {
                this.$router.push('/mail/main/viewMail' + mail.id);
            }
        },
    },

    props: ['mails'],
    components: {
        mailPreview
    },
}

