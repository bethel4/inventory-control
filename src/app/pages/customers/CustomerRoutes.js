import React from 'react'
import { authRoles } from '../../auth/authRoles'

const CustomerRoutes = [
    {
        path: '/pages/customer-list',
        component: React.lazy(() => import('./Customer-list')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/new-customer',
        component: React.lazy(() => import('./New-customers')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/customer-profile',
        component: React.lazy(() => import('./customer-profile')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/edit-customer',
        component: React.lazy(() => import('./edit_customer')),
        auth: authRoles.sa,
    },
]

export default CustomerRoutes
