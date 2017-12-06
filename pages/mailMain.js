import mailService from '../services/mailService.js'
import navBar from '../cmp/navBar.js'
import mailDetails from '../cmp/mailDetails.js'
<<<<<<< HEAD
import mailList from '../cmp/mailList.js'
import mailFilter from '../cmp/mailFilter.js'


=======



>>>>>>> 9227503d4a858d013e2f0bf112529471ae83f517
export default {
    template: `
        <section>
        <navBar></navBar>
        <h1>MAIL APP</h1>
        
<<<<<<< HEAD
        <email-filter></email-filter>
        
        <mail-list :mails="mails"></mail-list>
        
        <router-link to="/note/main/newMail"> 
        <button >compose new mail </button>
        </router-link>    

        
        <mail-details v-if="selectedMail" :mail="selectedMail"  @mailId="deleteMail"></mail-details>
        <mail-details v-else :mail="firstMail"  @mailId="deleteMail"></mail-details>    
=======
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
>>>>>>> 9227503d4a858d013e2f0bf112529471ae83f517
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
                // console.log('mails', this.mails)
            })
    },
    methods: {
<<<<<<< HEAD
=======
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
>>>>>>> 9227503d4a858d013e2f0bf112529471ae83f517
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