import mailPreview from '../cmp/mailPreview.js'

export default {
    template: `
        <section >

        {{chosenMail.subject}}
        {{chosenMail.senderName}}        
        {{chosenMail.timestamp}}
        {{chosenMail.senderMail}}
        {{chosenMail.body}}
        <i class="fa fa-trash-o" aria-hidden="true"  @click="emitDelete"></i>
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

