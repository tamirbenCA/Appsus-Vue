import mailService from '../services/mailService.js'
import navBar from '../cmp/navBar.js'
import mailDetails from '../cmp/mailDetails.js'
import mailList from '../cmp/mailList.js'
import mailFilter from '../cmp/mailFilter.js'

{/* <mail-details v-else :mail="firstMail"  @mailId="deleteMail"></mail-details>  */ }


export default {
    template: `
        <section>
        <navBar></navBar>
        <h1>MAIL APP</h1>
        <router-link to="/mail/main/newMail"> 
            <button >compose new mail </button>
        </router-link>    
        <mail-filter @filterMails="filterRes"></mail-filter>
        <div class="front-page">
            <mail-list :mails="mails" @presentMail="showmail"></mail-list>
            <mail-details :chosen-mail="chosenMail"></mail-details> 
        </div>
        
        

        
           
        </section>   
                `,
    data() {
        return {
            mails: [],
            selectedMail: null,
            firstMail: null,
            chosenMail: null
        }
    },
    created() {
        mailService.getMails()
            .then(mails => {
                this.mails = mails
                this.chosenMail = this.mails[0]
                console.log(' this.chosenMail',  this.chosenMail)
            })
    },
    methods: {
        showmail(presentMail) {
            console.log('presentMail',presentMail)
            this.chosenMail = presentMail;
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
            },

            filterRes(resMails){
                this.mails = resMails;
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