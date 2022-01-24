import React, { useState } from 'react'
import { Formik } from 'formik'
import {
    Grid,
    Card,
    Divider,
    TextField,
    MenuItem,
    Button,
} from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct } from '../../redux/actions/ProductAction'
import { useHistory } from 'react-router-dom'
const ProductForm = () => {
    const id = localStorage.getItem('id')
    const [state, setState] = useState({})
    const history = useHistory()
    const dispatch = useDispatch()
    const { productList } = useSelector((state) => state.product)
    console.log(productList)
   
    for (let i = 0; i < productList.length; i++) {
        if (productList[i]._id === id) {
            state.name = productList[i].first_name
            state.description = productList[i].description
            state.suk = productList[i].suk
            state.unit = productList[i].unit
            state.quantity = productList[i].quantity
            state.available = productList[i].available
            state.price = productList[i].price
            state.productionDate = productList[i].productionDate
            state.expiryDate = productList[i].expiryDate
        }
    }
  

    const handleSubmit = async (values, { isSubmitting }) => {
        debugger
        dispatch(updateProduct(values, id))
        localStorage.removeItem('id')
        history.push('/pages/product-list')
    }

    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">Update Product</h4>
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
                                    type="number"
                                    unique={true}
                                    onChange={handleChange}
                                />
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
                                            value={values.productionDate || ''}
                                            format="MMMM dd, yyyy"
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
                                            format="MMMM dd, yyyy"
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

const initialValues = {}

export default ProductForm
