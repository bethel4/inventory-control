import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
    Grid,
    Card,
    Divider,
    TextField,
    Button,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { insertCustomer } from '../../redux/actions/CustomerAction'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { history } from 'history.js';
import { useHistory } from 'react-router-dom';
const InvoiceForm = () => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)

       
        const newcustomer = [];
        newcustomer.push(values);
        dispatch(insertCustomer(newcustomer))
        debugger
        history.push('/pages/customer-list')
    }

    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">New Customer</h4>
                </div>
                <Divider className="mb-2" />

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                          errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
                          errors.email = 'Invalid email address';
                        }
                        if (!values.first_name) {
                            errors.first_name = 'Required';
                          } else if (!/^[A-Za-z]+$/.test(values.first_name) ) {
                            errors.first_name = 'Invalid  Input';
                          }
                          if (!values.last_name) {
                            errors.last_name = 'Required';
                          } else if (!/^[A-Za-z]+$/.test(values.last_name) ) {
                            errors.last_name = 'Invalid  Input';
                          }
                          if (!values.company_Name) {
                            errors.company_Name = 'Required';
                          } else if (!/^[A-Za-z]+$/.test(values.company_Name) ) {
                            errors.company_Name = 'Invalid  Input';
                          }
                          if (!values.country) {
                            errors.country = 'Required';
                          } else if (!/^[A-Za-z]+$/.test(values.country) ) {
                            errors.country = 'Invalid  Input';
                          }
                          if (!values.state) {
                            errors.state = 'Required';
                          } else if (!/^[A-Za-z]+$/.test(values.state) ) {
                            errors.state = 'Invalid  Input';
                          }
                          if (!values.city) {
                            errors.city = 'Required';
                          } else if (!/^[A-Za-z]+$/.test(values.city) ) {
                            errors.city = 'Invalid  Input';
                          }
                          if (!values.mobile_phone_no) {
                            errors.mobile_phone_no = 'Required';
                          } else if (!/^[0-9]*$/.test(values.mobile_phone_no) ) {
                            errors.mobile_phone_no = 'Invalid  Input';
                          }
                          if (!values.work_phone_no) {
                            errors.work_phone_no = 'Required';
                          } else if (!/^[0-9]*$/.test(values.work_phone_no) ) {
                            errors.work_phone_no = 'Invalid  Input';
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
                                    Customer Name
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                <TextField
                                        className="min-w-188"
                                        label="First Name"
                                        name="first_name"
                                        type="text"
                                        size="small"
                                        variant="outlined"
                                        value={values.first_name || ''}
                                        onChange={handleChange}
                                        >
                                     </TextField>
                                     <div className="text-error" >  {errors.first_name && touched.first_name && errors.first_name}</div>                          
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Last Name"
                                        name="last_name"
                                        size="small"
                                        variant="outlined"
                                        value={values.last_name || ''}
                                        onChange={handleChange}
                                    >
                                    </TextField>
                                    <div className="text-error" >  {errors.last_name && touched.last_name && errors.last_name}</div>
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Company Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="company_Name"
                                        name="company_Name"
                                        size="small"
                                        variant="outlined"
                                        value={values.company_Name}
                                        onChange={handleChange}
                                    />
                                     <div className="text-error" >  {errors.company_Name && touched.company_Name && errors.company_Name}</div>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Email
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="Email"
                                            onChange={handleChange}
                                            
                                            name="email"
                                            value={values.email}
                                        />
                                    <div className="text-error" >  {errors.email && touched.email && errors.email}</div>

                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Phone
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                        <TextField
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="work_phone_no"
                                            onChange={handleChange}
                                            type="text"
                                            name="work_phone_no"
                                            value={values.work_phone_no}
                                        />
                                 <div className="text-error" >  {errors.work_phone_no && touched.work_phone_no && errors.work_phone_no}</div>

                                </Grid>
                                <Grid item md={7} sm={8} xs={12}>
                                        <TextField
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="mobile_phone_no"
                                            onChange={handleChange}
                                            type="text"
                                            name="mobile_phone_no"
                                            value={values.mobile_phone_no}
                                        />
                                <div className="text-error" >  {errors.mobile_phone_no && touched.mobile_phone_no && errors.mobile_phone_no}</div>

                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Country
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="country"
                                        name="country"
                                        size="small"
                                        variant="outlined"
                                        value={values.country}
                                        onChange={handleChange}
                                    />
                                    <div className="text-error" >  {errors.country && touched.country && errors.country}</div>
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    State
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="state"
                                        name="state"
                                        size="small"
                                        variant="outlined"
                                        value={values.state}
                                        onChange={handleChange}
                                    />
                                 <div className="text-error" >  {errors.state && touched.state && errors.state}</div>
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    City
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="city"
                                        name="city"
                                        size="small"
                                        variant="outlined"
                                        value={values.city}
                                        onChange={handleChange}
                                    />
                                    <div className="text-error" >  {errors.city && touched.city && errors.city}</div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider />
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

const customerList = [
    'Mr.',
    'Mrs.',
    'Ms',
    'Miss.',
    'Dr',
]

const initialValues = {
}

export default InvoiceForm