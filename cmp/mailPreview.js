

export default {
    template: `
        <section :chosenMail="item" @click="goToMail(item.id)">
            {{item.subject}}
            {{item.sender}}
            {{item.timestamp}}
            <!-- <img :src="item.jpg" :alt="mailImage"> -->
        </section>
    `,
    data() {
        return {
            chosenMail: null
        }
    },
    props: ['item'],
 
}

