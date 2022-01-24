import React from 'react'
import { authRoles } from '../../auth/authRoles'

const organizationRoutes = [
    {
        path: '/pages/organizationalProfile',
        component: React.lazy(() => import('./organizationalProfile')),
        auth: authRoles.sa,
    },
]

export default organizationRoutes
