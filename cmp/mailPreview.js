

export default {
    template: `
        <section :chosenMail="item" @click="goToMail(item.id)" class="email-prev">
            {{item.subject}}
            {{item.sender}}
            {{item.timestamp}}
            <i class="fa fa-trash-o" aria-hidden="true" @click="emitDelete"></i>
        </section>
    `,
    props: ['item'],
 
}

