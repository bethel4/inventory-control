import React, { Fragment } from 'react'
import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
    Grid, Card,
    Divider,
    Button,
    Fab
} from '@material-ui/core'

import { Breadcrumb } from 'app/components'
import { makeStyles } from '@material-ui/core/styles'


const subscribarList = [
    {
        name: 'john doe',
        date: '18 january, 2019',
        amount: 1000,
        status: 'close',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'kessy bryan',
        date: '10 january, 2019',
        amount: 9000,
        status: 'open',
        company: 'My Fintech LTD.',
    },
    {
        name: 'james cassegne',
        date: '8 january, 2019',
        amount: 5000,
        status: 'close',
        company: 'Collboy Tech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
]
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))
const PaginationTable = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
    const classes = useStyles()

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

                <Grid container spacing={3} alignItems="right">
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <Card className="px-6 py-4 mb-6">
                            <Grid container spacing={3} alignItems="right">
                                <Grid item lg={2} md={12} sm={12} xs={12} >
                                    <label htmlFor="icon-button-file">
                                        <IconButton
                                            color="default"
                                            className={classes.button}
                                            aria-label="Upload picture"
                                            component="span"
                                        >
                                            <Icon>arrow_back</Icon>
                                        </IconButton>
                                    </label>

                                </Grid>
                                <Grid item lg={6} md={12} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={2} md={12} sm={12} xs={12} spacing={3} >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                    >
                                        Edit Invoice
                                    </Button>

                                </Grid>
                                <Grid item lg={2} md={12} sm={12} xs={12} alignItems="right">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                    >
                                        Print Invoice
                                    </Button>

                                </Grid>

                            </Grid>
                            <div className="mb-4 flex justify-between items-center">
                                <div className="mb-6">
                                    <p className="font-bold mb-4">Shipping Address</p>
                                    <p className="mt-0 mb-1">39, Hilbert Store</p>
                                    <p className="m-0">New York, NY, United States</p>
                                </div>

                                <div>
                                    <p className="font-bold mb-4 text-right">Billing Address</p>
                                    <p className="mt-0 mb-1 text-right">39, Hilbert Store</p>
                                    <p className="m-0 text-right">New York, NY, United States</p>
                                </div>
                            </div>
                            <Divider className="mb-2" />
                            <div className="mb-4 flex justify-between items-center">
                                <div className="mb-6">
                                    <p className="font-bold mb-4">Shipping Address</p>
                                    <p className="mt-0 mb-1">39, Hilbert Store</p>
                                    <p className="m-0">New York, NY, United States</p>
                                </div>

                                <div>
                                    <p className="font-bold mb-4 text-right">Billing Address</p>
                                    <p className="mt-0 mb-1 text-right">39, Hilbert Store</p>
                                    <p className="m-0 text-right">New York, NY, United States</p>
                                </div>
                            </div>



                            <Divider className="mb-2" />
                            <div className="w-full overflow-auto">
                                <Table className="whitespace-pre">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="px-0">#</TableCell>
                                            <TableCell className="px-0">Item Name</TableCell>
                                            <TableCell className="px-0">Unit Price</TableCell>
                                            <TableCell className="px-0">Unit</TableCell>
                                            <TableCell className="px-0">Cost</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {subscribarList.map((subscriber, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="px-0 capitalize" align="left">
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell className="px-0 capitalize" align="left">
                                                    {subscriber.company}
                                                </TableCell>
                                                <TableCell className="px-0 capitalize" align="left">
                                                    {subscriber.amount}
                                                </TableCell>
                                                <TableCell className="px-0 capitalize">
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell className="px-0 capitalize">
                                                    ${subscriber.amount}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className="mb-4 flex">
                                <div className="mb-4">
                                </div>
                                <Grid container spacing={3} alignItems="right">
                                    <Grid item lg={8} md={6} sm={4} xs={12} >

                                    </Grid>
                                    <Grid item lg={4} md={6} sm={6} xs={12} >
                                        <Grid container spacing={3} alignItems="right">
                                            <Grid item lg={6} md={6} sm={4} xs={12} >
                                                <div className="mb-6">
                                                    <p className="font-bold mb-4 text-left">sub Total</p>
                                                    <p className="mt-0 mb-1 text-left">Vat</p>
                                                    <p className="m-0 font-bold mb-4 text-left">Grand Total</p>
                                                </div>
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={4} xs={12} >
                                                <div className="mb-6">
                                                    <p className="font-bold mb-4 text-left">293</p>
                                                    <p className="mt-0 mb-1 text-left">39</p>
                                                    <p className="m-0 font-bold text-left">38434</p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </div>
                        </Card>

                    </Grid>
                </Grid>

            </div>
        </Fragment>

    )
}

export default PaginationTable











