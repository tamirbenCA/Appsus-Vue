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
        // When the user enter to mail app as the 1st app, there were two getMails calls, 
        // one from navBar and one from mailMain. Those two calls to the same function created
        // a problem with the unread status bar. The following code prevent the navBar to call
        // this function when there's mail in the url href.
        if (document.location.href.includes('mail')) return
        else mailService.getMails()
            .then (() => { mailService.checkUnreadMails()});            
    }        
}



