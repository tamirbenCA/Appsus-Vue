'use strict'

import myRoutes from './routes.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({routes : myRoutes})

new Vue({
    template: `
        <section>
                <h1>Mister Keeper</h1> 
                <router-view></router-view>
                <footer>cofferights 2018</footer>            
        </section>
    `,
    router: myRouter,
}).$mount('#app')