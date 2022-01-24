import React from 'react'
import { authRoles } from '../../auth/authRoles'

const InvoicerRoutes = [
    {
        path: '/pages/invoice-list',
        component: React.lazy(() => import('./invoice-list')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/single-invoice',
        component: React.lazy(() => import('./InvoiceItemTable')),
        auth: authRoles.sa,
    },
]

export default InvoicerRoutes
