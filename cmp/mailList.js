import mailPreview from '../cmp/mailPreview.js'
import mailService from '../services/mailService.js';


export default {
    template: `
        <section class="mailsList">

        <ul>
        <li v-for="mail in mails" @click="mailClicked(mail)">
            <mail-preview :item="mail"> </mail-preview>
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
        }
    },

    props: ['mails'],
    components: {
        mailPreview
    },
}

