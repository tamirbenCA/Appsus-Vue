import mailPreview from '../cmp/mailPreview.js'
import mailService from '../services/mailService.js';


export default {
    template: `
        <section class="mailsList">
            <ul>
                <li v-for="mail in mails"  @click="mailClicked(mail)">
                    <i class="fa fa-chevron-right" aria-hidden="true" @click="goToMail(mail.id)" ></i>
                    <mail-preview :item="mail">
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
        },
        goToMail(mailId) {
            console.log('mailId',mailId)
            this.$router.push('/mail/main/viewMail' + mailId);
        },
    },

    props: ['mails'],
    components: {
        mailPreview
    },
}

