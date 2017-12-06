'use strict'
import myRoutes from './routes.js'


Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    template: `
        <section>
            <router-view></router-view>
        </section>
    `,
   
    router: myRouter,
}).$mount('#app')