import React from 'react'
import { Formik } from 'formik'
import {
    Grid,
    Card,
    Divider,
    TextField,
    MenuItem,
    Button,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { updateVendor } from '../../redux/actions/VendorAction'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
const InvoiceForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
        const newvendor = [];
        newvendor.push(values);
        dispatch(updateVendor(newvendor))
    }

    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">Edit profile information</h4>
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
                                    <div className="font-bold">First Name: </div>
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="First Name "
                                        name="firstName"
                                        size="small"
                                        variant="outlined"
                                        value={values.firstName}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                <div className="font-bold">Last Name: </div>
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Last Name"
                                        name="lastName"
                                        size="small"
                                        variant="outlined"
                                        value={values.lastName}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                <div className="font-bold">Email: </div>
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Email"
                                        name="Email"
                                        size="small"
                                        variant="outlined"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                <div className="font-bold">Mobile phone: </div>
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Mobile Number"
                                        name="mobilephone"
                                        size="small"
                                        variant="outlined"
                                        value={values.mobile_no}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                <div className="font-bold">Address: </div>
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Address"
                                        name="Address"
                                        size="small"
                                        variant="outlined"
                                        value={values.address}
                                        onChange={handleChange}
                                    />
                                </Grid>
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
                        </form>
                    )}
                </Formik>
            </Card>
        </div>
    )
}


const initialValues = {
    customerType: '',
    otherField: 'Adjustment',
}

export default InvoiceForm