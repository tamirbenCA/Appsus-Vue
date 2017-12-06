

export default {
    template: `
        <section >
            <div class="nav-bar">
                <router-link :to="'/'"> <div class="logo">Appsus</div> </router-link>
                <div class="app-icons">
                    <router-link :to="'/map/main'"> <div class="map-app-lnk"></div> </router-link>
                    <router-link :to="'/note/main'"> <div class="note-app-lnk"></div> </router-link>
                    <router-link :to="'/mail/main'"> <div class="mail-app-lnk"></div> </router-link>
                </div>
            </div>
        </section>
    `
}


