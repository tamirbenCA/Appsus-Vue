import mailCompose from '../cmp/mailCompose.js'

export default {
    template: `
        <section>
            <mail-compose></mail-compose> 
        </section>   
                `,

    data() {
        return {
        }
    },
    created() {
    },

    components: {
        mailCompose
    },
}