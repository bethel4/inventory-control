import React from 'react'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
    Grid,
    Card,
    Divider,
    TextField,
    MenuItem,
    Button,
    Icon,
} from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import InvoiceItemTable from '../../views/forms/invoice-form/InvoiceItemTable'
import { calculateAmount } from '../../views/forms/invoice-form/InvoiceFormService'
import {updatePurchaseOrder} from '../../redux/actions/SaleOrderAction'
const InvoiceForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const id = localStorage.getItem('id')
    const calculateSubTotal = (itemList = []) => {
        let subTotal = 0
        itemList.forEach((item) => {
            subTotal += calculateAmount(item)
        })

        return subTotal
    }

    const calculateTotal = (values) => {
        let total = 0
        total += calculateSubTotal(values.items)
        total += values.shippingCharge || 0
        total += values[values.otherField] || 0

        return total
    }

    const handleSubmit = async (values, { isSubmitting }) => {
        dispatch(updatePurchaseOrder(values,id)) 
        localStorage.removeItem('id')
        history.push('/pages/saleorder-list')
    }

    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">New Sale Order</h4>
                </div>
                <Divider className="mb-2" />

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setSubmitting,
                        setFieldValue,
                    }) => (
                        <form className="p-4" onSubmit={handleSubmit}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item md={2} sm={4} xs={12}>
                                    Customer Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Name"
                                        name="customerName"
                                        size="small"
                                        variant="outlined"
                                        select
                                        value={values.customerName || ''}
                                        onChange={handleChange}
                                    >
                                        {customerList.map((item, ind) => (
                                            <MenuItem value={item} key={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Invoice#
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Invoice No"
                                        name="invoiceNo"
                                        size="small"
                                        variant="outlined"
                                        defaultValue="INV-000001"
                                        value={values.invoiceNo}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Order Number
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Invoice No"
                                        name="orderNo"
                                        size="small"
                                        variant="outlined"
                                        value={values.orderNo}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Sale Order Date
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                        >
                                            <KeyboardDatePicker
                                                className="m-2"
                                                margin="none"
                                                label="Sale order Date"
                                                inputVariant="outlined"
                                                type="text"
                                                size="small"
                                                autoOk={true}
                                                value={values.invoiceDate}
                                                format="MMMM dd, yyyy"
                                                onChange={(date) =>
                                                    setFieldValue(
                                                        'invoiceDate',
                                                        date
                                                    )
                                                }
                                            />
                                        </MuiPickersUtilsProvider>

                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Due date"
                                            name="terms"
                                            size="small"
                                            variant="outlined"
                                            value={values.terms || ''}
                                            onChange={handleChange}
                                            select
                                        >
                                            {paymentTermList.map(
                                                (item, ind) => (
                                                    <MenuItem
                                                        value={item}
                                                        key={item}
                                                    >
                                                        {item}
                                                    </MenuItem>
                                                )
                                            )}
                                        </TextField>

                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                        >
                                            <KeyboardDatePicker
                                                className="m-2"
                                                margin="none"
                                                label="Expected Delivery Date"
                                                inputVariant="outlined"
                                                type="text"
                                                size="small"
                                                autoOk={true}
                                                value={values.dueDate}
                                                format="MMMM dd, yyyy"
                                                onChange={(date) =>
                                                    setFieldValue(
                                                        'dueDate',
                                                        date
                                                    )
                                                }
                                            />
                                        </MuiPickersUtilsProvider>
                                    </div>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Salesperson
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Salesperson"
                                        name="salesPersonName"
                                        size="small"
                                        variant="outlined"
                                        value={values.salesPersonName || ''}
                                        onChange={handleChange}
                                        select
                                    >
                                        {salespersonList.map((item, ind) => (
                                            <MenuItem value={item} key={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                            </Grid>

                            <div className="mb-8">
                                <InvoiceItemTable
                                    values={values}
                                    setFieldValue={setFieldValue}
                                    handleChange={handleChange}
                                />
                            </div>

                            <div className="mb-8">
                                <Grid container spacing={3}>
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <Card
                                            className="bg-default p-4"
                                            elevation={0}
                                        >
                                            <Grid
                                                container
                                                spacing={3}
                                                justify="space-between"
                                                alignItems="center"
                                            >
                                                <Grid item xs={6}>
                                                    Sub Total
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="text-right">
                                                        {calculateSubTotal(
                                                            values.items
                                                        ).toFixed(2)}
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="flex items-center">
                                                        <span className="whitespace-pre">
                                                            Shipping Charges
                                                        </span>
                                                        <TextField
                                                            className="ml-3"
                                                            name="shippingCharge"
                                                            size="small"
                                                            type="number"
                                                            variant="outlined"
                                                            value={
                                                                values.shippingCharge ||
                                                                ''
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="text-right">
                                                        {(
                                                            values.shippingCharge ||
                                                            0
                                                        ).toFixed(2)}
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="flex items-center">
                                                        <TextField
                                                            name="otherField"
                                                            size="small"
                                                            variant="outlined"
                                                            value={
                                                                values.otherField ||
                                                                ''
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />

                                                        <TextField
                                                            className="ml-3"
                                                            name={
                                                                values.otherField
                                                            }
                                                            size="small"
                                                            variant="outlined"
                                                            type="number"
                                                            value={
                                                                values[
                                                                values
                                                                    .otherField
                                                                ] || ''
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="text-right">
                                                        {(
                                                            values[
                                                            values
                                                                .otherField
                                                            ] || 0
                                                        ).toFixed(2)}
                                                    </div>
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <h5 className="m-0">
                                                        Total ( birr )
                                                    </h5>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="text-right">
                                                        <h5 className="m-0">
                                                            {calculateTotal(
                                                                values
                                                            ).toFixed(2)}
                                                        </h5>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>


                            <div className="mt-6">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </Card>
        </div>
    )
}

const paymentTermList = [
    'NET 15',
    'NET 30',
    'NET 45',
    'NET 60',
    'Due end of the month',
    'Due on receive',
]

const customerList = [
    'customer 1',
    'customer 2',
    'customer 3',
    'customer 4',
    'customer 5',
]

const salespersonList = [

    'salesperson 1',
    'salesperson 2',
    'salesperson 3',
    'salesperson 4',
]

const initialValues = {
    customerType: '',
    otherField: 'Adjustment',
}

export default InvoiceForm