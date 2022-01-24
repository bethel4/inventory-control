import React from 'react'
import { Redirect } from 'react-router-dom'

import dashboardRoutes from './views/dashboard/DashboardRoutes'
import customerRoutes from './pages/customers/CustomerRoutes'
import vendorRoutes from './pages/vendor/VendorRoutes'
import SaleOrderRoutes from './pages/saleOrders/SaleOrderRoutes'
import InvoicerRoutes from './pages/invoice/invoiceRoutes'
import ProductRoutes from './pages/products/productRoutes'
import purchaseOrderRoutes from './pages/purchaseOrders/purchaseOrderRoutes'
import billRoutes from './pages/bill/billRoutes'
import organizationRoutes from './pages/organizationalProfile/organizationRoutes'
import warehouseRoutes from './pages/warehouses/warehouseRoutes'
import branchesRoutes from './pages/branches/branches'
import usersAndRoutes from './pages/usersAndRoles/usersRoutes'
import profileRoutes from './pages/userprofile/userProfileRoutes'
import utilitiesRoutes from './views/utilities/UtilitiesRoutes'

import materialRoutes from './views/material-kit/MaterialRoutes'
import chartsRoute from './views/charts/ChartsRoute'
import dragAndDropRoute from './views/Drag&Drop/DragAndDropRoute'

import formsRoutes from './views/forms/FormsRoutes'
import mapRoutes from './views/map/MapRoutes'


const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard/default" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    ...dashboardRoutes,
    ...customerRoutes,
    ...vendorRoutes,
    ...SaleOrderRoutes,
    ...InvoicerRoutes,
    ...ProductRoutes,
    ...purchaseOrderRoutes,
    ...billRoutes,
    ...organizationRoutes,
    ...warehouseRoutes,
    ...branchesRoutes,
    ...usersAndRoutes,
    ...profileRoutes,
    ...materialRoutes,
    ...utilitiesRoutes,
    ...chartsRoute,
    ...dragAndDropRoute,
    ...formsRoutes,
    ...mapRoutes,
    ...redirectRoute,
    ...errorRoute,
]

export default routes
