import React from 'react'
import { authRoles } from '../../auth/authRoles'

const dashboardRoutes = [
    {
        path: '/dashboard',
        component: React.lazy(() => import('./Analytics2')),
        auth: authRoles.sa,
    },
    {
        path: '/dashbord/alternative',
        component: React.lazy(() => import('./InventoryManagement')),
        auth: authRoles.sa,
    },
    {
        path: '/dashbord/inventory-management',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    }
]

export default dashboardRoutes
