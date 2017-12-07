import EventBusService from '../services/EventBusService.js'

export default {
    template: `
        <section class="email-prev">
            {{item.subject}}
            {{item.senderMail}}
            {{item.timeStamp}}
            <button  @click="emitDeleteMail(item.id)">Delete</button>
        </section>
    `,
    data() {
        return {
            mails: [],
        }
    },
    props: ['item'],
     methods: {
        emitDeleteMail(mailId) {
            EventBusService.$emit('deleteMail', mailId)
            // this.mails = mailService.deleteMail(mailId);
        },
    },
    computed: {
        timeStampToDate() {
            var d = new Date(this.item.timeStamp)
            return d.toLocaleString('en-GB');
        }
    }
}

