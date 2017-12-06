

export default {
    template: `
        <section>
            {{item.subject}}
            {{item.sender}}
            {{item.timestamp}}
            <!-- <img :src="item.jpg" :alt="mailImage"> -->
        </section>
    `,

    props: ['item']
}

