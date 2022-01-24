import React from 'react'
import { authRoles } from '../../auth/authRoles'

const VendorRoutes = [
    {
        path: '/pages/vendor-list',
        component: React.lazy(() => import('./vendor-list')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/new-vendor',
        component: React.lazy(() => import('./New-vendor')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/vendor-profile',
        component: React.lazy(() => import('./vendor-profile')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/edit-vendor',
        component: React.lazy(() => import('./edit_vendor')),
        auth: authRoles.sa,
    },
]

export default VendorRoutes
