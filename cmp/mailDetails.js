

export default {
    template: `
        <section>
        {{mail.subject}}
        {{mail.senderName}}        
        {{mail.timestamp}}
        {{mail.senderMail}}
        {{mail.body}}
        </section>
    `,
props: ['mail']
}

