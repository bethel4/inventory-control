import React from 'react'
import { authRoles } from '../../auth/authRoles'

const usersAndRoutes = [
    {
        path: '/pages/usersAndRoles',
        component: React.lazy(() => import('./usersAndRoles')),
        auth: authRoles.sa,
    },
]

export default usersAndRoutes
