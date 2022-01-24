import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage ,useFormik} from "formik";
import * as Yup from "yup";
import {
    Grid,
    Card,
    Divider,
    TextField,
    Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux';
import { insertVendor } from '../../redux/actions/VendorAction'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { values } from 'lodash';
const VendorForm = () => {
    
    const history = useHistory()
    const dispatch = useDispatch()
    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
        
        const newvendor = [];
        newvendor.push(values);
        console.log(values)
        dispatch(insertVendor(newvendor))

        history.push('/pages/vendor-list')
    }
  
     
    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">New Vednor</h4>
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
                        if (!values.firstName) {
                            errors.firstName = 'Required';
                          } else if (!/^[A-Za-z]+$/.test(values.firstName) ) {
                            errors.firstName = 'Invalid  Input';
                          }
                          if (!values.lastName) {
                            errors.lastName = 'Required';
                          } else if (!/^[A-Za-z]+$/.test(values.lastName) ) {
                            errors.lastName = 'Invalid  Input';
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
                        validate,
                        isSubmitting,
                        setSubmitting,
                        setFieldValue,
                    }) => (
                        <form className="p-4" onSubmit={handleSubmit}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item md={2} sm={4} xs={12}>
                                     Name
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                <TextField
                                        className="min-w-188"
                                        label="First Name"
                                        name="firstName"
                                        type="text"
                                        size="small"
                                        variant="outlined"
                                        value={values.firstName }
                                        onChange={handleChange}
                                        >
 
                                     </TextField>
                                     <div className="text-error" >  {errors.firstName && touched.firstName && errors.firstName}</div>
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Last Name"
                                        name="last_name"
                                        size="small"
                                        variant="outlined"
                                        value={values.last_name }
                                        onChange={handleChange}
                                    >
                                    </TextField>
                                    <div className="text-error" >  {errors.lastName && touched.lastName && errors.lastName}</div>
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Company Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="company Name"
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

export default VendorForm