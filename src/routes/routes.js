import Home from '~/pages/Home';
import Following from '~/pages/Following';

const publicRoutes = [
    {path: '/', component : Home},
    {path: '/blog', component : Following}
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}