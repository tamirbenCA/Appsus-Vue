import mailPreview from '../cmp/mailPreview.js'

export default {
    template: `
        <section class="list">

        <ul>
        <li v-for="mail in mails" @click="selectMail(mail)">
            <mail-preview :item="mail"> </mail-preview>
            <!-- <img :src="mail.jpg" :alt="mailImage"> -->
        </li>
    </ul>  
        </section>
    `,

    props: ['mails'],
    components: {
        mailPreview
    },
}

