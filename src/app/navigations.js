import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        name: 'Alternative',
        path: '/dashbord/alternative',
        icon: 'assessment',
    },
    {
        name: 'Inventory Managment',
        path: '/dashbord/inventory-management',
        icon: 'domain',
    },
    {
        label: 'Pages',
        type: 'label',
    },
    {
        name: 'Products',
        icon: 'local_grocery_store',
        children: [
            {
                name: 'Product list',
                iconText: 'SI',
                path: '/pages/product-list',
            },
            {
                name: 'New Product',
                iconText: 'SU',
                path: '/pages/new-product',
            },
        ],
    },
    {
        name: 'Customers',
        icon: 'group',
        children: [
            {
                name: 'Customer list',
                iconText: 'group',
                path: '/pages/customer-list',
            },
            {
                name: 'New Customers',
                iconText: 'SU',
                path: '/pages/new-customer',
            },
        ],
    },
    {
        name: 'Vendors',
        icon: 'store',
        children: [
            {
                name: 'Vendors list',
                iconText: 'SI',
                path: '/pages/vendor-list',
            },
            {
                name: 'New Vendor',
                iconText: 'SU',
                path: '/pages/new-vendor',
            },
        ],
    },
    {
        name: 'Sale Orders',
        icon: 'folder',
        children: [
            {
                name: 'SaleOrder list',
                iconText: 'SI',
                path: '/pages/saleorder-list',
            },
            {
                name: 'Add Sale Order',
                iconText: 'SU',
                path: '/pages/new-saleorder',
            },
        ],
    },
    {
        name: 'Invoice',
        icon: 'insert_drive_files',
        children: [
            {
                name: 'Invoice list',
                iconText: 'SI',
                path: '/pages/invoice-list',
            },
            {
                name: 'Add Invoice',
                iconText: 'SU',
                path: '/pages/single-invoice',
            },
        ],
    },
    {
        name: 'Purchase Orders',
        icon: 'shopping_basket',
        children: [
            {
                name: 'PurchaseOrder list',
                iconText: 'SI',
                path: '/pages/purchaseorder-list',
            },
            {
                name: 'Add PurchaseOrders',
                iconText: 'SU',
                path: '/pages/new-purchaseorder',
            },
        ],
    },
    {
        name: 'Bills',
        icon: 'content_paste',
        children: [
            {
                name: 'Bill list',
                iconText: 'SI',
                path: '/pages/bill-list',
            },
            {
                name: 'Add Bill',
                iconText: 'SU',
                path: '/pages/single-bill',
            },
        ],
    },
    {
        name: 'Reports',
        icon: 'show_chart',
        path: '/pages/reports',
    },
    {
        name: 'Forcasting',
        icon: 'security',
        path: '/pages/forcasting',
    },
    {
        name: 'User Profile',
        icon: 'account_circle',
        path: '/pages/userprofile',
    },

    {
        name: 'Setting',
        icon: 'settings',
        path: '/session/signup',
    },

    
]
