import homePage from './pages/homePage.js'
import noteMain from './pages/noteMain.js'
import noteDetailsPage from './pages/noteDetailsPage.js'
import mapMain from './pages/mapMain.js'
import mapLocationDetails from './cmp/mapLocationDetails.js'
import mailMain from './pages/mailMain.js'
import composeNewMail from './pages/composeNewMail.js'
import mailCompose from './cmp/mailCompose.js'
import mailDetails from './cmp/mailDetails.js'
import showMailOnMobile from './pages/showMailOnMobile.js'

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
        path: '/map/:locationId',
        component: mapLocationDetails
    },
    {
        path: '/map/:locationId/:new',
        component: mapLocationDetails
    },
    {
        path: '/mail/main/',
        component: mailMain
    },
    {
        path: '/mail/main/newMail',
        component: mailCompose
    },
    {
        path: '/mail/main/viewMail:mailId',
        component: showMailOnMobile
    },
 
  
];

export default routes;