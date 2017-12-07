import mailPreview from '../cmp/mailPreview.js'

export default {
    template: `
        <section class="details" v-if="chosenMail" >
            {{chosenMail.subject}}
            {{chosenMail.senderName}}        
            {{chosenMail.timestamp}}
            {{chosenMail.senderMail}}
            {{chosenMail.body}}
            <i class="fa fa-trash-o" aria-hidden="true"  ></i>
        </section>
    `,
    data() {
        return {
            mailId: this.chosenMail ? this.chosenMail.id : null
        }
    },
    methods: {
        emitDelete() {
            this.$emit('mailId', this.mailId)
        },
    },
    props: ['chosen-mail'],

    components: {
        mailPreview
    },
}



