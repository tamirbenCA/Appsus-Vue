import mailService from '../services/mailService.js'
import navBar from '../cmp/navBar.js'
import mailDetails from '../cmp/mailDetails.js'
import mailList from '../cmp/mailList.js'
import mailFilter from '../cmp/mailFilter.js'
import mailStatus from '../cmp/mailStatus.js'
{/* <mail-details v-else :mail="firstMail"  @mailId="deleteMail"></mail-details>  */ }


export default {
    template: `
        <section>
        <navBar></navBar>
        <h1>MAIL APP</h1>
        <router-link to="/mail/main/newMail"> 
            <button >compose new mail </button>
        </router-link>    
        <mail-filter @filterMailsEvent="filterRes"></mail-filter>
        <div class="front-page">
            <mail-list :mails="mails" @presentMail="showmail"></mail-list>
            <mail-details :chosen-mail="chosenMail"></mail-details> 
        </div>
        <mail-status :style="{width:checkWidth + '%'}"> </mail-status>    
        </section>   
                `,
    data() {
        return {
            mails: [],
            selectedMail: null,
            firstMail: null,
            chosenMail: null,
            unreadMails:null
        }
    },
    created() {
        mailService.getMails() 
            .then(mails => {
                this.mails = mails
                this.chosenMail = this.mails[0]
                console.log(' this.chosenMail',  this.chosenMail)
            });

            this.unreadMails = mailService.checkUnreadMails()
            .then(res => {
                console.log('res', res )
                return res;
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
        
        filterRes(resMails){
            this.mails = resMails;
        }
    },
    computed: {
        checkWidth() {
            this.unreadMails = mailService.checkUnreadMails()
                .then(res => {
                    return res;
                })
        }
    },
    components: {
        navBar,
        mailDetails,
        mailList,
        mailFilter,
        mailStatus
    },
}