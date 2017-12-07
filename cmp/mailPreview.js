import EventBusService from '../services/EventBusService.js'

export default {
    template: `
        <section :class="classObject">
            {{item.subject}}
            {{item.senderMail}}
            {{timeStampToDate}}
            <i class="fa fa-trash-o" aria-hidden="true" @click="emitDeleteMail(item.id)"></i>
            
        </section>
    `,
    props: ['item'],
    data() {
        return {
            mails: [],
        }
    },
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
        },
        classObject() {
            return {
                'email-prev': true,
                'unread-mail': !this.item.isRead
            }
        }
    }
}

