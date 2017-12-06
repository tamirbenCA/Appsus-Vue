

export default {
    template: `
        <section>

        {{mail.subject}}
        {{mail.senderName}}        
        {{mail.timestamp}}
        {{mail.senderMail}}
        {{mail.body}}
        <i class="fa fa-trash-o" aria-hidden="true"  @click="emitDelete"></i>
        </section>
    `,
    data() {
        return {
           noteId:mail.id
        }
    },
    methods: {
        emitDelete() {
            this.$emit('mailId', this.noteId)
        }
    },
    props: ['mail']
}

