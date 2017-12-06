import mailService from '../services/mailService.js'
import navBar from '../cmp/navBar.js'
import mailDetails from '../cmp/mailDetails.js'
import mailList from '../cmp/mailList.js'
import mailFilter from '../cmp/mailFilter.js'


export default {
    template: `
        <section>
        <navBar></navBar>
        <h1>MAIL APP</h1>
        
        <email-filter></email-filter>
        
        <mail-list :mails="mails"></mail-list>
        
        <router-link to="/note/main/newMail"> 
        <button >compose new mail </button>
        </router-link>    

        
        <mail-details v-if="selectedMail" :mail="selectedMail"  @mailId="deleteMail"></mail-details>
        <mail-details v-else :mail="firstMail"  @mailId="deleteMail"></mail-details>    
        </section>   
                `,
    data() {
        return {
            mails: [],
            selectedMail: null,
            firstMail:null
        }
    },
    created() {
        mailService.getMails()
            .then(mails => {
                this.mails = mails
                console.log('mails', this.mails)
            })
    },
    methods: {
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
        mailDetails,
        mailList,
        mailFilter,
        
    },
}