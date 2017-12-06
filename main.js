'use strict'

import myRoutes from './routes.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({routes : myRoutes})

new Vue({
    template: `
        <section>
                <h1>Sprint 3 - Appsus</h1> 
                <router-view></router-view>
        </section>
    `,
    router: myRouter,
}).$mount('#app')