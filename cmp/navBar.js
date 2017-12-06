

export default {
    template: `
        <section >
        
            <div class="nav-bar">
            <div class="logo">Appsus</div>
            <div class="app-icons">
                <router-link :to="'/note/main'">
                    <div class="map-app-lnk"> </div>
                </router-link>
                <router-link :to="'/note/main'">
                    <div class="mail-app-lnk"></div>
                </router-link>
                <router-link :to="'/note/main'">
                <div class="note-app-lnk"></div>
            </router-link>
            </div>
            </div>
        
        </section>
    `
}



