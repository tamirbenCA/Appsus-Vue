

export default {
    template: `
        <section>
        <h1> Appsus</h1> 
        <div class="container">
            <div class="map-app"></div>
            <router-link :to="'/note/main'">
            <div class="note-app"></div>
            </router-link>
            <div class="mail-app"></div>
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