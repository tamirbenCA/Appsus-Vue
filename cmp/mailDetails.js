import mailPreview from '../cmp/mailPreview.js'

export default {
    template: `
        <section class="details">

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
            noteId: chosenMail.id
        }
    },
    methods: {
        emitDelete() {
            this.$emit('mailId', this.noteId)
        },


    },
    props: ['chosenMail'],

    components: {
        mailPreview
    },
}



