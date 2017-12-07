import mailService from '../services/mailService.js'

export default {
    template: `
        <section>
            <input class="search-box" type="search" v-model="term" @input="searchMail" placeholder="Search for mail" /> 
        </section>
    `,
    data() {
        return {
            term: '',
            filterMails: []
        }
    },

    methods: {
        searchMail() {
            mailService.queryBySearchWord(this.term)
                .then(mails => {
                    this.filterMails = mails
                    // console.log('filter:', this.filterMails);
                    this.$emit('filteredMails', this.filterMails)
                })
                .catch(err => {
                    console.log(err);
                    this.mails = [];
                })
        },

    }
}

