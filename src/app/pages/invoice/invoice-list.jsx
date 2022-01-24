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
import { getInvoiceList } from '../../redux/actions/InvoiceAction'
import { ThemeProvider } from '@material-ui/core/styles'
import MUIDataTable, { TableFilterList } from "mui-datatables";

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
        name: "company_Name",
        label: "Company",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "city",
        label: "City",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "state",
        label: "State",
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
    const { customerList } = useSelector((state) => state.customer)
    console.log(customerList)
    const theme = useTheme()
    const classes = useStyles()
    if (!cartListLoaded) {
        dispatch(getInvoiceList())
        cartListLoaded = true
    }

    const rows = customerList.map((customerList) => {
        return {
            // assuming atributes
            first_name: customerList.first_name,
            company_Name: customerList.company_Name,
            city: customerList.city,
            state: customerList.state,
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
                            title={"Customers List"}
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










