import homePage from './pages/homePage.js'
import noteDetailsPage from './pages/noteDetailsPage.js'

const routes = [
    {
        path: '/',
        component: homePage
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
];

export default routes;