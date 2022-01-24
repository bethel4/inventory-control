import React from 'react'
import { authRoles } from '../../auth/authRoles'

const billRoutes = [
    {
        path: '/pages/bill-list',
        component: React.lazy(() => import('./bill-list')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/single-bill',
        component: React.lazy(() => import('./singleBill')),
        auth: authRoles.sa,
    },
]

export default billRoutes
