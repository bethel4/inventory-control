import React from 'react'
import { authRoles } from '../../auth/authRoles'

const profileRoutes = [
    {
        path: '/pages/userprofile',
        component: React.lazy(() => import('./UserAccountDetails.jsx')),
        auth: authRoles.sa,
    },

    {
        path: '/pages/editprofile',
        component: React.lazy(() => import('./edituserprofile.jsx')),
        auth: authRoles.sa,
    }

]

export default profileRoutes
