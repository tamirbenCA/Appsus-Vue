

export default {
    template: `
        <section>

        <input type="search" v-model="term" @input="searchMail" placeholder="Search for mail" /> 
        </section>
    `,
    data() {
        return {
            term: '',
        }
    },

    methods: {
        searchMail() {
            mailService.queryBySearchWord(this.term)
                .then(mails => this.mails = mails)
                .catch(err => {
                    console.log(err);
                    this.mails = [];
                    this.firstMail = this.mails[0]
                })
        },


    }
}

