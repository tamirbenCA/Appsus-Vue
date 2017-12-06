import homePage from './pages/homePage.js'
import noteMain from './pages/noteMain.js'
import noteDetailsPage from './pages/noteDetailsPage.js'
// import mapMain from './pages/mapMain.js'
// import emailMain from './pages/emailMain.js'

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
    // {
    //     path: '/map/main',
    //     component: mapMain
    // },
    // {
    //     path: '/email/main',
    //     component: emailMain
    // },
];

export default routes;