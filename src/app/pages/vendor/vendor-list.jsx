import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
    Grid, Card, Badge, Link,
    Divider, Icon, Button, IconButton, Fab
} from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { useHistory } from 'react-router-dom'
import { Breadcrumb } from 'app/components'
import { getVendorList } from '../../redux/actions/VendorAction'
import MUIDataTable, { TableFilterList } from "mui-datatables";
var vendorid

const columns = [
    {
        name: "first_name",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "email",
        label: "Email",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "company_Name",
        label: "COMPANY NAME",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "work_phone_no",
        label: "Work Phone Number",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "Action",
        label: "Action"
    },
];

const options = {
    filter: true,
    filterType: "dropdown",
    responsive: true
};
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

let cartListLoaded = false;
const VendorList = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { vendorList } = useSelector((state) => state.vendor)
    const theme = useTheme()
    const classes = useStyles()
    if (!cartListLoaded) {
        dispatch(getVendorList())
        cartListLoaded = true
    }

    const rows = vendorList.map((vendorList) => {
        
        return {
            // assuming attributes
            first_name: <div> <div>{vendorList.first_name} {vendorList.last_name} 
            </div><div className="text-small"></div></div>,
            company_Name: vendorList.company_Name,
            email: vendorList.email,
            work_phone_no: vendorList.work_phone_no,
            Action: <div><IconButton className={classes.button} onClick={
                (e) =>{
                    localStorage.setItem('vendorid',vendorList._id)
                    console.log(vendorList._id)
                    history.push('/pages/edit-vendor')}
                }>

                <Icon>create</Icon>
            </IconButton>
                <IconButton className={classes.button} onClick={(event) => {
                    console.log(columns)
                    localStorage.setItem('vendorid',vendorList._id)
                    localStorage.setItem('userdata',JSON.stringify(vendorList))
                    history.push('/pages/vendor-profile')}
                }>
                    <Icon>arrow_forward</Icon>
                </IconButton></div>
        }
    })

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
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <MUIDataTable
                            title={"Vendor List"}
                            data={rows}
                            columns={columns}
                            options={options}
                        />

                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default VendorList










