import React from 'react'
import { authRoles } from '../../auth/authRoles'

const branchesRoutes = [
    {
        path: '/pages/branches',
        component: React.lazy(() => import('./branch')),
        auth: authRoles.sa,
    },
]

export default branchesRoutes
