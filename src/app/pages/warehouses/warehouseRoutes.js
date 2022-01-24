import React from 'react'
import { authRoles } from '../../auth/authRoles'

const warehouseRoutes = [
    {
        path: '/pages/warehouses',
        component: React.lazy(() => import('./warehouse')),
        auth: authRoles.sa,
    },
]

export default warehouseRoutes
