import mailService from '../services/mailService.js'
import navBar from '../cmp/navBar.js'
import mailDetails from '../cmp/mailDetails.js'



export default {
    template: `
        <section>
        <navBar></navBar>
        <h1>MAIL APP</h1>
        
        <input type="search" v-model="term" @input="searchMail" placeholder="Search for mail" />
        <ul>
            <li v-for="mail in mails" @click="selectMail(mail)">
                {{mail.subject}}
                {{mail.sender}}
                {{mail.timestamp}}
                <!-- <img :src="mail.jpg" :alt="mailImage"> -->
            </li>
        </ul>  
        <mail-details v-if="selectedMail" :mail="selectedMail"  @mailId="deleteMail"></mail-details>   
        </section>   
                `,
    data() {
        return {
            term: '',
            mails: [],
            selectedMail: null,
        }
    },
    created() {
        mailService.getMails()
            .then(mails => {
                this.mails = mails
                // console.log('mails', this.mails)
            })
    },
    methods: {
        searchMail() {
            mailService.queryBySearchWord(this.term)
                .then(mails => { 
                    this.mails = mails
                })
                .catch(err => {
                    console.log(err);
                    this.mails = [];
                })
        },
        selectMail(mail) {
            console.log('mail', mail);
            this.selectedMail = mail;
        },
        deleteMail(mailId) {
            console.log('mailId', mailId)
            MailService.deleteMailChosen(mailId)
                .then(res =>
                    this.$router.push('/note/main')
                )
        },
        computed: {
            checkUnreadMails() {
                this.unreadMails = mailService.checkUnreadMails()
                .then(res => {
                    return res;
                })
            }
        }
    },
    components: {
        navBar,
        mailDetails
    },
}