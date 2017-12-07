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
<<<<<<< HEAD
        <mail-filter @filterMails="filterRes"></mail-filter>
        <div class="front-page">
            <mail-list :mails="mails" @presentMail="showmail"></mail-list>
            <mail-details :chosen-mail="chosenMail"></mail-details> 
        </div>
=======
        <mail-filter @filteredMails="filterRes"></mail-filter>
>>>>>>> 2c358747a308a9e2f601b75f0aad7f22edc5136c
        
        

        
           
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
                console.log('this.mails',this.mails)
                this.chosenMail = this.mails[0]
                // console.log('mails', this.mails)
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
<<<<<<< HEAD
        computed: {
            checkUnreadMails() {
                this.unreadMails = mailService.checkUnreadMails()
                    .then(res => {
                        return res;
                    })
            },

            filterRes(resMails){
                this.mails = res.mails;
=======
    computed: {
        checkUnreadMails() {
            this.unreadMails = mailService.checkUnreadMails()
            .then(res => {
                return res;
                })
>>>>>>> 2c358747a308a9e2f601b75f0aad7f22edc5136c
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