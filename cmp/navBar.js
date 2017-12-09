import EventBusService from '../services/EventBusService.js'
import mailService from '../services/mailService.js';


export default {
    template: `
        <section >
            <div class="nav-bar">
                <router-link :to="'/'"> <div class="logo">Appsus</div> </router-link>
                <div class="app-icons">
                    <div class="navbar-icon">               
                        <router-link :to="'/map/main'"> <div class="map-app-lnk"></div> </router-link>
                    </div>
                    <div class="navbar-icon">                
                        <router-link :to="'/note/main'"> <div class="note-app-lnk"></div> </router-link>
                    </div>
                    <div class="navbar-icon">
                        <router-link :to="'/mail/main'"> <div class="mail-app-lnk"></div> </router-link>
                        <div class="button-badge">{{count}}</div>
                    </div>                    
                </div>
            </div>
        </section>
    `,
    data() { 
        return {
            count: 0
        }
    },
    created() {
        EventBusService.$on('unreadMailNotification',count => {
            this.count = count;
        });
        mailService.checkUnreadMails();
        mailService.getMails()
            .then (() => { mailService.checkUnreadMails()});            
    }        
}



