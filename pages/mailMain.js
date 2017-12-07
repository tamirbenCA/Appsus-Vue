import mailService from '../services/mailService.js'
import navBar from '../cmp/navBar.js'
import mailDetails from '../cmp/mailDetails.js'
import mailList from '../cmp/mailList.js'
import mailFilter from '../cmp/mailFilter.js'

{/* <mail-details v-else :mail="firstMail"  @mailId="deleteMail"></mail-details>  */}


export default {
    template: `
        <section>
        <navBar></navBar>
        <h1>MAIL APP</h1>
        <router-link to="/mail/main/newMail"> 
        <button >compose new mail </button>
        </router-link>    
        <mail-filter @filteredMails="filterRes"></mail-filter>
        
        <mail-list :mails="mails"></mail-list>
        <mail-details :chosen-mail="chosenMail" ></mail-details> 
        

        
           
        </section>   
                `,
    data() {
        return {
            mails: [],
            selectedMail: null,
            firstMail:null,
            chosenMail:null
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
        selectMail(mail) {

            console.log('mail', mail);
            this.selectedMail = mail;
        },
        deleteMail(mailId) {
            console.log('mailId', mailId)
            mailService.deleteMailChosen(mailId)
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
        },
        filterRes(resMails) {
            console.log('inside filterRes')
            console.log('resMails:', resMails)
            this.mails = resMails;
        }
    },
    components: {
        navBar,
        mailDetails,
        mailList,
        mailFilter, 
    },
}