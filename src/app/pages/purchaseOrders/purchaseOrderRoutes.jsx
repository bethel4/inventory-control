import React from 'react'
import { authRoles } from '../../auth/authRoles'

const purchaseOrderRoutes = [
    {
        path: '/pages/purchaseorder-list',
        component: React.lazy(() => import('./PurchaseOrder-list')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/new-purchaseorder',
        component: React.lazy(() => import('./New-PurchaseOrder')),
        auth: authRoles.sa,
    },
]

export default purchaseOrderRoutes
