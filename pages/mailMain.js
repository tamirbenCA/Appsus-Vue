import mailService from '../services/mailService.js';
import navBar from '../cmp/navBar.js';
import mailDetails from '../cmp/mailDetails.js';
import mailList from '../cmp/mailList.js';
import mailFilter from '../cmp/mailFilter.js';
import mailStatus from '../cmp/mailStatus.js';
import EventBusService from '../services/EventBusService.js';



export default {
    template: `
        <section>
        <navBar></navBar>
         
        <mail-filter @filterMailsEvent="filterRes"></mail-filter>
        <mail-status :width="unreadMails"> </mail-status>
        
        <div class="box">
            <div class="front-page">
                <mail-list :mails="mails" @presentMail="showmail"></mail-list>
                <mail-details :chosen-mail="chosenMail"></mail-details> 
            </div>   
        </div>    
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
    methods: {
        showmail(presentMail) {
            this.chosenMail = presentMail;
            mailService.checkUnreadMails()
            .then((res) => {
                this.unreadMails = res

            })
        },
        deleteMail(mailId) {
            mailService.deleteMail(mailId)
            .then(res => {
                this.mails = res
                
                this.chosenMail = this.mails[0]
                mailService.checkUnreadMails()
                .then((res) => {
                    this.unreadMails = res
                })
            })

        },
        filterRes(resMails){
            this.mails = resMails;
        }
    },
    created() {
        mailService.getMails() 
        .then(mails => {
            this.mails = mails
            console.log('this.mails',this.mails)
            this.chosenMail = this.mails[0]
            mailService.checkUnreadMails()
            .then((res) => {
                this.unreadMails = res

            })
            EventBusService.$on('deleteMail',emailId => {
                this.deleteMail(emailId)
            });   
        })
    },  
    components: {
        navBar,
        mailDetails,
        mailList,
        mailFilter,
        mailStatus
    },
}