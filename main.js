'use strict'

import myRoutes from './routes.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    template: `
        <section>
                <h1> Appsus</h1> 
                <div class="container">
                    <div class="map-app">MapApp</div>
                    <div class="note-app">NoteApp</div>
                    <div class="mail-app">MailApp</div>
                </div>
                
                <router-view></router-view>
        </section>
    `,
    router: myRouter,
}).$mount('#app')