

export default {
    template: `
        <section class="email-prev">
            {{item.subject}}
            {{item.senderMail}}
            {{item.timeStamp}}
            <button  @click="deleteMail(item.id)">Delete</button>
        </section>
    `,
    props: ['item'],
     methods: {
        deleteMail(mailId) {
           
        },
    },
 
}

