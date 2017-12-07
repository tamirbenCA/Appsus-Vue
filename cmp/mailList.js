import mailPreview from '../cmp/mailPreview.js'

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
            console.log('mail',mail)
            this.$emit('presentMail', mail)
            mail.isRead = true;
        }
    },

    props: ['mails'],
    components: {
        mailPreview
    },
}

