import Home from './Home'
import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import JwtRegister from './register/JwtRegister'
import JwtLogin from './login/JwtLogin'
import VerfiyCode from './verfiyaccount'
import RestPassword from './restPassword'
const sessionRoutes = [
    {
        path: '/session/signup',
        component: JwtRegister,
    },
    {
        path: '/session/signin',
        component: JwtLogin,
    },
    {
        path: '/session/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/session/verfiy-code',
        component: VerfiyCode,
    },
    {
        path: '/session/restpassword',
        component: RestPassword,
    },
    {
        path: '/session/404',
        component: NotFound,
    },
    {
        path: '/session/landing',
        component: Home,
    },
]

export default sessionRoutes
