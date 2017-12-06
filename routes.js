import homePage from './pages/homePage.js'
import noteMain from './pages/noteMain.js'
import noteDetailsPage from './pages/noteDetailsPage.js'
import mapMain from './pages/mapMain.js'
import mailMain from './pages/mailMain.js'
import composeNewMail from './pages/composeNewMail.js'
import mailCompose from './cmp/mailCompose.js'

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/note/main',
        component: noteMain
    },    
    {
        path: '/note/create',
        component: noteDetailsPage
    },    
    {
        path: '/note/:noteId',
        component: noteDetailsPage
    },
    
    {
        path: '/note/:noteId/:new',
        component: noteDetailsPage
    },
    {
        path: '/map/main',
        component: mapMain
    },
    {
        path: '/note/main',
        component: mailMain
    },
    {
        path: '/mail/main/newMail',
        component: mailCompose
    },
    {
        path: '/mail/main/',
        component: mailMain
    },
];

export default routes;