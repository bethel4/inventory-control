import React from 'react'
import { authRoles } from '../../auth/authRoles'

const SaleOrderRoutes = [
    {
        path: '/pages/saleorder-list',
        component: React.lazy(() => import('./saleOrder-list')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/new-saleorder',
        component: React.lazy(() => import('./New-SaleOrders')),
        auth: authRoles.sa,
    },
]

export default SaleOrderRoutes
