import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
    Grid, Icon, IconButton,
} from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { useHistory } from 'react-router-dom'
import { Breadcrumb } from 'app/components'
import { getCustomerList } from '../../redux/actions/CustomerAction'
import MUIDataTable, { TableFilterList } from "mui-datatables";
import {getSingleCustomer} from '../../redux/actions/CustomerAction'
var id
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
    responsive: true,
    selectableRows: false,
   
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
    const theme = useTheme()
    const classes = useStyles()
    if (!cartListLoaded) {
        dispatch(getCustomerList())
        cartListLoaded = true
    }

    console.log(customerList)
    const rows = customerList.map((customerList) => {
        return {
            // assuming attributes
            first_name: <div> <div className="font-bold">{customerList.first_name}
            </div><div className="text-small">{customerList.email}</div></div>,
            company_Name: customerList.company_Name,
            email: customerList.email,
            work_phone_no: customerList.work_phone_no,
            Action: <div>
                <IconButton className={classes.button} onClick={
                    (e) =>{
                        localStorage.setItem('id',customerList._id)
                        console.log(customerList._id)
                        history.push("/pages/edit-customer")}
                    }>
                        
                <Icon>create</Icon>
            </IconButton>
                <IconButton className={classes.button} onClick={(event) =>{ 
                    console.log(columns)
                    localStorage.setItem('id',customerList._id)
                    const userId =   localStorage.getItem('id')
                    dispatch(getSingleCustomer(userId))
                    console.log();
                    localStorage.setItem('userdata',JSON.stringify(customerList))
                    console.log(customerList)
                    history.push('/pages/customer-profile')}}>
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
                    <Grid item className="ml-30" lg={12} md={12} sm={12} xs={12}>
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










