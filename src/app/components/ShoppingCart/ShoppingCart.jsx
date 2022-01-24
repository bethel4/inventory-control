import React, { Fragment, useState } from 'react'
import { Icon, Badge, IconButton, Drawer, Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useSettings from 'app/hooks/useSettings'
import useAuth from 'app/hooks/useAuth'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    miniCart: {
        width: 'var(--sidenav-width)',
        '& .cart__topbar': {
            height: 'var(--topbar-height)',
        },
        '& .mini-cart__item': {
            transition: 'background 300ms ease',
            '&:hover': {
                background: 'rgba(0,0,0,0.01)',
            },
        },
    },
}))

let cartListLoaded = false

function ShoppingCart({ container }) {
    const [panelOpen, setPanelOpen] = useState(false)

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const { user } = useAuth()
    const { settings } = useSettings()


    const handleDrawerToggle = () => {
        setPanelOpen(!panelOpen)
    }

    const handleOrganizationalProfileClick = () => {
        history.push('/pages/organizationalProfile')
        setPanelOpen(!panelOpen)
    }
    const handleWarehouseClick = () => {
        history.push('/pages/warehouses')
        setPanelOpen(!panelOpen)
    }
    const handleBranchClick = () => {
        history.push('/pages/branches')
        setPanelOpen(!panelOpen)
    }
    const handleusersAndRolesClick = () => {
        history.push('/pages/usersAndRoles')
        setPanelOpen(!panelOpen)
    }


    return (
        <Fragment>
            <IconButton onClick={handleDrawerToggle}>
                <Icon>settings</Icon>
            </IconButton>

            <ThemeProvider theme={settings.themes[settings.activeTheme]}>
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={'right'}
                    open={panelOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <div
                        className={clsx('flex-column h-full', classes.miniCart)}
                    >
                        <div className="cart__topbar elevation-z6 flex items-center p-1 mb-2 pl-4">
                            <Icon color="primary">settings</Icon>
                            <h5 className="ml-2 my-0 font-medium">settings</h5>
                        </div>

                        <div className="flex-grow overflow-auto">

                            <div className="mini-cart__item flex items-center py-2 px-2 cursor-pointer" onClick={handleOrganizationalProfileClick}>
                                <div className="flex flex-column mr-1">
                                    <IconButton>
                                        <Icon className="cursor-pointer">
                                            keyboard_arrow_up
                                        </Icon>
                                    </IconButton>
                                </div>
                                <div className="mr-2 flex-grow flex-column">
                                    <h6 className="m-0 mb-1 ellipsis w-200 text-13">
                                        organizational profile
                                    </h6>
                                </div>
                            </div>
                            <div className="mini-cart__item flex items-center py-2 px-2 cursor-pointer" onClick={handleWarehouseClick}>
                                <div className="flex flex-column mr-1">
                                    <IconButton>
                                        <Icon className="cursor-pointer">
                                            keyboard_arrow_up
                                        </Icon>
                                    </IconButton>
                                </div>
                                <div className="mr-2 flex-grow flex-column">
                                    <h6 className="m-0 mb-1 ellipsis w-200 text-13">
                                        Warehouse
                                    </h6>
                                </div>
                            </div>
                            <div className="mini-cart__item flex items-center py-2 px-2 cursor-pointer" onClick={handleBranchClick}>
                                <div className="flex flex-column mr-1">
                                    <IconButton>
                                        <Icon className="cursor-pointer">
                                            keyboard_arrow_up
                                        </Icon>
                                    </IconButton>
                                </div>
                                <div className="mr-2 flex-grow flex-column">
                                    <h6 className="m-0 mb-1 ellipsis w-200 text-13">
                                        Branches
                                    </h6>
                                </div>
                            </div>
                            <div className="mini-cart__item flex items-center py-2 px-2 cursor-pointer" onClick={handleusersAndRolesClick}>
                                <div className="flex flex-column mr-1">
                                    <IconButton>
                                        <Icon className="cursor-pointer">
                                            keyboard_arrow_up
                                        </Icon>
                                    </IconButton>
                                </div>
                                <div className="mr-2 flex-grow flex-column">
                                    <h6 className="m-0 mb-1 ellipsis w-200 text-13">
                                        Users and Roles
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </ThemeProvider>
        </Fragment>
    )
}

export default ShoppingCart
