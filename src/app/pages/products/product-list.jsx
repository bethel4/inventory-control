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
import { getProductList } from '../../redux/actions/ProductAction'
import MUIDataTable, { TableFilterList } from "mui-datatables";
var id
const columns = [
    {
        name: "name",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "suk",
        label: "SUK",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "unit",
        label: "UNIT",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "description",
        label: "Description",
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
const ProductList = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { productList } = useSelector((state) => state.product)
    const theme = useTheme()
    const classes = useStyles()
    if (!cartListLoaded) {
        dispatch(getProductList())
        cartListLoaded = true
    }

    console.log(productList)
    const rows = productList.map((productList) => {
        return {
            // assuming attributes
            name: <div> <div className="font-bold">{productList.name}
            </div><div className="text-small"></div></div>,
            suk:productList.suk,
            unit: productList.unit,
            email: productList.price,
            description: productList.description,
            Action: <div>
                <IconButton className={classes.button} onClick={
                    (e) =>{
                        localStorage.setItem('id',productList._id)
                        console.log(productList._id)
                        history.push("/pages/edit-product")}
                    }>
                        
                <Icon>create</Icon>
            </IconButton>
                <IconButton className={classes.button} onClick={(event) =>{ 
                    console.log(columns)
                    localStorage.setItem('id',productList._id)
                    history.push('/pages/product-profile')}}>
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
                            title={"Product List"}
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

export default ProductList










