

export default {
    template: `
        <section class="email-prev">
            {{item.subject}}
            {{item.senderMail}}
            {{timeStampToDate}}
            <!-- {{item.timeStamp}} -->
            <i class="fa fa-trash-o" aria-hidden="true" @click="emitDelete"></i>
        </section>
    `,
    props: ['item'],
    methods: {
        emitDelete() {
            console.log('mailPreview')
            // this.$emit('mailId', this.noteId)
        },
    },
    computed: {
        timeStampToDate() {
            var d = new Date(this.item.timeStamp)
            return d.toLocaleString('en-GB');
        }
    }
}

