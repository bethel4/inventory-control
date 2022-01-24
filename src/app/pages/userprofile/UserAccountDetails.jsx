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
import InvoiceItemTable from '../../views/forms/invoice-form/InvoiceItemTable'
import { calculateAmount } from '../../views/forms/invoice-form/InvoiceFormService'

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

    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
    }

    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">Profile Information</h4>
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
                          <Grid item md={4} sm={8} xs={12}>

                          <div class="flex-column items-center mb-6" >
                          <div class="MuiAvatar-root MuiAvatar-circle w-120 h-120">
                                        <img
                                            className="w-full"
                                            src="/assets/images/user-icon-12.jpg"
                                            alt=""
                                                />
                                   </div> 
                                   <div className="text-28 font-bold"> Full-name information
                                       <br/> <div className="text-16"> Job-Description </div>
                                       </div>
                                   </div> 

                                   </Grid>
                                   <Grid item md={4} sm={8} xs={12}>
                                      
                                       
                                <Card className=" mx-0 my-6" elevation={2}> 
                                <Grid item md={3} sm={12} xs={12}>
                                    <Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-15 font-bold text-left">FirstName:</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">Userfirstname</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-15 font-bold text-left">LastName:</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">UserLastname</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={6} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-15 font-bold text-left">Email:</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={12} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">babikumelachew@gmail.com</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-15 font-bold text-left">PhoneNumber:</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">+2519784512</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-15 font-bold text-left">Address</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">StreetTailwood,No.17</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                </Grid>

                            </Card> 

                                     </Grid>

                                <Grid item md={4} sm={8} xs={12}>
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                    
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        type="submit"
                                      >
                                    Edit Profile 
                                </Button>
                                </Grid>


                                





                        
                                {/* 
                                <Grid item md={2} sm={4} xs={12}>
                                    <div className="font-bold">First Name: </div>
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
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                <div className="font-bold">Last Name: </div>
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Last Name"
                                        name="company_Name"
                                        size="small"
                                        variant="outlined"
                                        value={values.company_Name}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                <div className="font-bold">Email: </div>
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Email"
                                        name="company_Name"
                                        size="small"
                                        variant="outlined"
                                        value={values.company_Name}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                <div className="font-bold">Mobile phone: </div>
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Mobile Number"
                                        name="company_Name"
                                        size="small"
                                        variant="outlined"
                                        value={values.company_Name}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                <div className="font-bold">Address: </div>
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Address"
                                        name="company_Name"
                                        size="small"
                                        variant="outlined"
                                        value={values.company_Name}
                                        onChange={handleChange}
                                    />
                                </Grid> */}
                             </Grid>                
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
