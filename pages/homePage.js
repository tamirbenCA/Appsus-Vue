

export default {
    template: `
        <section>
            <h1> Appsus</h1> 
            <div class="container">
                <router-link :to="'/map/main'"> <div class="map-app"></div> </router-link>
                <router-link :to="'/note/main'"> <div class="note-app"></div> </router-link>
                <router-link :to="'/mail/main'"> <div class="mail-app"></div> </router-link>
        </div>
        
        </section>   
                `,
                
    data() {
        return {
        }
    },
    created() {
    },
}