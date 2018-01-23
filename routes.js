import homePage from './pages/homePage.js'
import noteMain from './pages/noteMain.js'
import mapMain from './pages/mapMain.js'
import mailMain from './pages/mailMain.js'
import noteDetailsPage from './cmps/noteDetailsPage.js'
import mapLocationModal from './cmps/mapLocationModal.js'
import mailCompose from './cmps/mailCompose.js'
import mailReply from './cmps/mailReply.js'
import mailDetails from './cmps/mailDetails.js'
import showMailOnMobile from './cmps/showMailOnMobile.js'


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
        component: mapLocationModal
    },
    {
        path: '/map/:locationId/:new',
        component: mapLocationModal
    },
    {
        path: '/mail/main/',
        component: mailMain
    },
    {
        path: '/mail/newMail',
        component: mailCompose
    },
    {
        path: '/mail/replyMail/:chosenMailId',
        component: mailReply
    },
    {
        path: '/mail/main/viewMail:mailId',
        component: showMailOnMobile
    },
 
  
];

export default routes;