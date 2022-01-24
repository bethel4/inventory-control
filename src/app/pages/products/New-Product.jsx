import React from 'react'
import { Formik } from 'formik'
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
import { calculateAmount } from '../../views/forms/invoice-form/InvoiceFormService'
import { useDispatch, useSelector } from 'react-redux';
import { insertProduct } from '../../redux/actions/ProductAction'
import { useHistory } from 'react-router-dom'
const InvoiceForm = () => {

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

    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
        const newproduct = [];
        newproduct.push(values);
        dispatch(insertProduct(newproduct))
        history.push('/pages/product-list')
    }

    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">New Product</h4>
                </div>
                <Divider className="mb-2" />

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                    validate={values => {
                        const errors = {};
                    
                          if (!values.name) {
                            errors.name = 'Required';
                          } 

                          if (!values.suk) {
                            errors.suk = 'Required';
                          } else if (!/^[0-9]*$/.test(values.suk) ) {
                            errors.suk= 'Invalid  Input';
                          }
                          if (!values.unit) {
                            errors.unit = 'Required';
                          } else if (!/^[A-Za-z]+$/.test(values.unit) ) {
                            errors.unit = 'Invalid  Input';
                          }

                          if (!values.quantity) {
                            errors.quantity = 'Required';
                          } else if (!/^[0-9]*$/.test(values.quantity) ) {
                            errors.quantity = 'Invalid  Input';
                          }

                          if (!values.price) {
                            errors.price = 'Required';
                          } else if (!/^[0-9]*$/.test(values.price) ) {
                            errors.qprice = 'Invalid  Input';
                          }
                    
                        return errors;
                      }} 
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
                                    Product Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Product Name"
                                        name="name"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        value={values.name || ''}
                                        onChange={handleChange}
                                    />
                                <div className="text-error" >  {errors.name && touched.name && errors.name}</div>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Product Description
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="product Description"
                                        name="description"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        value={values.description || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    SUK
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="SUK"
                                        name="suk"
                                        size="small"
                                        variant="outlined"
                                        defaultValue="00000"
                                        value={values.suk || ''}
                                        onChange={handleChange}
                                    />
                                    <div className="text-error" >  {errors.suk && touched.suk && errors.suk}</div>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                   Unit
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Unit"
                                        name="unit"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        value={values.unit || ''}
                                        type="text"
                                        unique={true}
                                        onChange={handleChange}
                                    />
                                    <div className="text-error" >  {errors.unit && touched.unit && errors.unit}</div>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                   Quantity
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Quantity"
                                        name="quantity"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        type="number"
                                        value={values.quantity || ''}
                                        onChange={handleChange}
                                    />
                                    <div className="text-error" >  {errors.quantity && touched.quantity && errors.quantity}</div>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                  Available
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Available"
                                        name="available"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        value={values.available || ''}
                                        
                                        onChange={handleChange}
                                    />  
                                </Grid>

                                
                                <Grid item md={2} sm={4} xs={12}>
                                   Price
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Price"
                                        name="price"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        value={values.price || ''}
                                        type="number"
                                        unique={true}
                                        onChange={handleChange}
                                    />
                                    <div className="text-error" >  {errors.price && touched.price && errors.price}</div>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Production to Expiration
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                        >
                                            <KeyboardDatePicker
                                                className="m-2"
                                                margin="none"
                                                label="Production Date"
                                                name="productionDate"
                                                inputVariant="outlined"
                                                type="text"
                                                size="small"
                                                autoOk={true}
                                                value={values.productionDate}
                                                format="MMMM, dd, yyyy"
                                                onChange={(date) =>
                                                    setFieldValue(
                                                        'productionDate',
                                                        date
                                                    )
                                                }
                                            />
                                        </MuiPickersUtilsProvider>

                                        
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                        >
                                            <KeyboardDatePicker
                                                className="m-2"
                                                margin="none"
                                                label="Expiration Date"
                                                name="expiryDate"
                                                inputVariant="outlined"
                                                type="text"
                                                size="small"
                                                autoOk={true}
                                                value={values.expiryDate}
                                                format="MMMM, dd, yyyy"
                                                onChange={(date) =>
                                                    setFieldValue(
                                                        'ExpirationDate',
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
 

                           <div className="mt-6">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </div>
                         </Grid>
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
    'customer 6',
    'customer 7',
    'customer 8',
]

const initialValues = {
    customerType: '',
    otherField: 'Adjustment',
}

export default InvoiceForm