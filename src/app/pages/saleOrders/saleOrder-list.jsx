import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
    Grid, Card, Badge, Link,
    Divider, Icon, Button, IconButton, Fab
} from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import PaginationTable from '../../views/material-kit/tables/PaginationTable'
import { useHistory } from 'react-router-dom'
import { Breadcrumb } from 'app/components'
import { getSaleOrderList } from '../../redux/actions/SaleOrderAction'
import { ThemeProvider } from '@material-ui/core/styles'
import MUIDataTable, { TableFilterList } from "mui-datatables";

const columns = [
    {
        name: "Date",
        label: "Date",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "SaleOrderNO",
        label: "SaleOrder#",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "CustomerName",
        label: "CustomerName",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "Status",
        label: "Status",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "Expected_Shipment",
        label: "Expected Shipment",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "Amount",
        label: "Amount",
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
const CustomerList = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { saleOrderList } = useSelector((state) => state.saleorder)
    const theme = useTheme()
    const classes = useStyles()
    if (!cartListLoaded) {
        dispatch(getSaleOrderList())
        cartListLoaded = true
    }

    const rows = saleOrderList.map((saleOrderList) => {
        return {
            // assuming atributes
            Date: saleOrderList.first_name,
            SaleOrderNO: saleOrderList.company_Name,
            CustomerName: saleOrderList.city,
            Status: saleOrderList.state,
            Expected_Shipment: saleOrderList.state,
            Amount: saleOrderList.state,
            Action: <div><IconButton className={classes.button} onClick={() => history.push('/pages/edit-customer')}>
                <Icon>create</Icon>
            </IconButton>
                <IconButton className={classes.button} onClick={() => history.push('/pages/customer-profile')}>
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
                            title={"SaleOrder List"}
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

export default CustomerList










