import React from 'react'
import { authRoles } from '../../auth/authRoles'

const ProductRoutes = [
    {
        path: '/pages/product-list',
        component: React.lazy(() => import('./product-list')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/new-product',
        component: React.lazy(() => import('./New-Product')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/product-profile',
        component: React.lazy(() => import('./product-profile.jsx')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/edit-product',
        component: React.lazy(() => import('./edit_product')),
        auth: authRoles.sa,
    },
]

export default ProductRoutes
