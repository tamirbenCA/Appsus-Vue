import eventBusService from '../services/eventBusService.js'

export default {
    template: `
        <section class="email-prev" :class="{'unread-mail': !this.item.isRead}">
            <i class="fa fa-trash-o" aria-hidden="true" @click="emitDeleteMail(item.id)"></i>
            {{item.subject}}
            {{item.senderMail}}
            {{timeStampToDate}}   
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
            eventBusService.$emit('deleteMail', mailId)
            // this.mails = mailService.deleteMail(mailId);
        },
    },
    computed: {
        timeStampToDate() {
            var d = new Date(this.item.timeStamp)
            return d.toLocaleString('en-GB');
        },
        // classObject() {
        //     return {
        //         // 'email-prev': true,
        //         'unread-mail': !this.item.isRead
        //     }
        // }
    }
}

