import mailService from '../services/mailService.js'

export default {
    template: `
        <section class="mail-header">
            <div class="mail-search-bar">
                <router-link to="/mail/newMail" tag="button" class="compose-mail-button"> 
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </router-link>
                <input class="search-box mail-search-input" type="search" v-model="term" @input="searchMail" placeholder="Search for mail" />
            </div>
            
            <div class="filter-checkbox">
                <label><input type="radio" value="all" v-model="type" @change="searchMail"> All</label>
                <label><input type="radio" value="true" v-model="type" @change="searchMail"> Read</label>
                <label><input type="radio" value="false" v-model="type" @change="searchMail"> Unread</label>
            </div>
             
        </section>
    `,
    data() {
        return {
            term: '',
            type:null,
            filterMails: [],
        }
    },

    methods: {
        searchMail() {
            if (this.term) {
                mailService.queryBySearchWord(this.term)
                    .then(mails => {
                        this.filterMails = mails
                        // console.log('filter:', this.filterMails);
                        this.$emit('filterMailsEvent', this.filterMails)
                    })
                    .catch(err => {
                        console.log(err);
                        this.mails = [];
                    })
            }
            else {
                console.log('this.type',this.type)
                mailService.filterReadUnread(this.type)
                    .then(mails => {
                        this.filterMails = mails
                        // console.log('filter:', this.filterMails);
                        this.$emit('filterMailsEvent', this.filterMails)
                    })
                    .catch(err => {
                        console.log(err);
                        this.mails = [];
                    })
            }
        }

    },


}

// style="padding:10px"