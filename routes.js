import noteHomePage from './pages/noteHomePage.js'
import noteDetailsPage from './pages/noteDetailsPage.js'

const routes = [
    {
        path: '/',
        component: noteHomePage
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