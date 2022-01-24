

import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
    TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid, Card, Badge, Link,
    Divider, Icon, Button, IconButton, Fab
} from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useTheme } from '@material-ui/styles'
import PaginationTable from '../../views/material-kit/tables/PaginationTable'
import { useHistory } from 'react-router-dom'
import { Breadcrumb } from 'app/components'
import { getWarehouseList } from '../../redux/actions/WarehouseAction'
import { ThemeProvider } from '@material-ui/core/styles'
import MUIDataTable, { TableFilterList } from "mui-datatables";
import { Formik } from 'formik'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))
function Item(warehouseList) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [open, setOpen] = React.useState(false)

    function handleClickOpen() {
        setOpen(true)
    }

    function handleDialogClose() {

        setOpen(false)
    }
    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }
    function handleSubmit(event) {
        
    }
    function handleClose() {
        setAnchorEl(null)
    }
    const classes = useStyles()
    return (
        <Card className="w-full  flex justify-between py-2 px-2 mx-2 mb-4 bg-light-gray" elevation={3}>


            <div>
                <Dialog
                    open={open}
                    onClose={handleDialogClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            
                        </DialogContentText>
                        <Formik
                     
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                >
                    {({
                        values,
                       
                    }) => (
                       <form action="">
                       <TextField
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="Email"
                                            type="email"
                                            name="email"
                                            value={values.email}
                                        />
                       </form>
                    )}
                        </Formik>
                    
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleDialogClose}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleDialogClose} color="primary" >
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>


            <div className="w-full  flex justify-between">
                <div className="w-full  flex justify-between">
                    <div className="w-full text-muted">
                        {warehouseList.message.warehouse_name}
                    </div>
                    <div className="w-full text-muted">
                        <div className="px-0 pt-2 pb-4">
                            <p className="m-0">
                                {warehouseList.message.country}<br></br>
                                {warehouseList.message.city}<br></br>
                                {warehouseList.message.street}<br></br>
                                {warehouseList.message.phone_no}
                            </p>
                            <small className="text-muted">
                                {warehouseList.message.country}
                            </small>
                        </div>
                    </div>
                    <div className="w-full text-muted">
                        <IconButton className={classes.button} onClick={handleClickOpen}>
                            <Icon>mode_edit</Icon>
                        </IconButton>
                        <div>
                            <Button
                                variant="outlined"
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <Icon color="primary">settings</Icon>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>mark as Inactive</MenuItem>
                                <MenuItem onClick={handleClose}>Delete</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>

            </div>
        </Card>);
}
let cartListLoaded = false;
const CustomerList = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { warehouseList } = useSelector((state) => state.warehouse)
    const [open, setOpen] = React.useState(false)

    function handleClickOpen() {
        setOpen(true)
    }

    function handleDialogClose() {
        setOpen(false)
    }
    const theme = useTheme()
    const classes = useStyles()
    if (!cartListLoaded) {
        dispatch(getWarehouseList())
        cartListLoaded = true
    }


    return (

        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <div className="m-sm-30">
                    <div className="mb-sm-30">
                        <Breadcrumb
                            routeSegments={[
                                { name: 'Forms', path: '/forms' },
                                { name: 'Basic' },
                            ]}
                        />
                    </div>
                </div>

                <Card className="w-full" elevation={3}>
                    <div className="flex p-4">
                        <h4 className="mr-6">Warehouses</h4>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClickOpen}
                        >
                            New
                        </Button>
                    </div>

                    <div>
                        <Dialog
                            open={open}
                            onClose={handleDialogClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={handleDialogClose}
                                >
                                    Cancel
                                </Button>
                                <Button onClick={handleDialogClose} color="primary">
                                    Subscribe
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>









                    <Divider className="mb-2" />
                    <Grid className="m-4 w-full mb-6" container spacing={8} alignItems="left">
                        {warehouseList?.map((message) => (<Item key={message} message={message} />
                        ))}
                    </Grid>
                </Card>


            </div></Fragment>
    )
}

export default CustomerList





