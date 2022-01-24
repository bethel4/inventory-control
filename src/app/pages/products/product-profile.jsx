import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Breadcrumb,  } from 'app/components'
import { useDispatch, useSelector } from 'react-redux'
import {
    Button,
    Icon,
    IconButton,
    Grid,
    Card,
    Divider,
    Tabs,
    Tab,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TablePagination,
} from '@material-ui/core'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { deleteProduct } from '../../redux/actions/ProductAction'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { useHistory } from 'react-router-dom'
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

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


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary,
        tabBarOptions: {
            pressColor: 'gray',//for click (ripple) effect color
            backgroundColor: 'white',
            style: {

            }
        }
    },
}));

var styles = {
    default_tab: {
        color: 'gray',
        backgroundColor: '#fafafa',
    },
}

const SimpleForm = () => {
    const id = localStorage.getItem('id')
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const history = useHistory()
    const [page, setPage] = React.useState(0)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false)
    function handleClickOpen() {
        setOpen(true)
    }

    function handleDialogClose() {
        dispatch(deleteProduct(id))
        localStorage.removeItem('id')
        history.push('/pages/product-list')
        setOpen(false)
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };
    const [state, setState] = useState({
        date: new Date(),
    })
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }


    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        username,
        firstName,
        creditCard,
        mobile,
        password,
        confirmPassword,
        gender,
        date,
        email,
    } = state

    return (
        <div className="m-sm-30">
            <div className="m-sm-30">
            <div>
                <Dialog
                    open={open}
                    onClose={handleDialogClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Sure You want to delete this Item!.
                        </DialogContentText>
                        
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleDialogClose}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleDialogClose} color="primary">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>


                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Forms', path: '/forms' },
                            { name: 'Basic' },
                        ]}
                    />
                </div>
            </div>
            <Card elevation={0}>
            </Card>
            <Divider className="mb-2" />

            <form className="p-0" onSubmit={handleSubmit}>
                <Grid className="mb-6" container spacing={3} alignItems="left">
                </Grid>
                <div className="elevation-z0">
                    <AppBar elevation={0} position="static mt-6">
                        <Tabs style={styles.default_tab} value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Details" {...a11yProps(0)} />
                            <Tab label="Invoices" {...a11yProps(1)} />
                            <Tab label="transactions" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <Grid className="mb-6" container spacing={3} alignItems="left">
                            <div
                            class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 " 
                             />
                            
                        <Card className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4">
                                  <Grid container >
                                  <Grid item md={12} sm={12} xs={12}>
                                  
                                    <div class="flex-column items-center mb-6" >
                                    <div class="MuiAvatar-root MuiAvatar-circle w-84 h-84"> 
                                        <img
                                            className="w-full"
                                            src="/assets/images/Userprofile.png"
                                            alt=""
                                                />
                                   </div>
                                     </div>
                                   </Grid>

                                   <Grid item md={12} sm={12} xs={12}>
                                       <div class="flex-column items-center mb-6">
                                       <div className="text-20 font-bold"> Product name
                                       </div>
                                       </div>
                                       
                                     </Grid>
                                     <Divider className="min-w-300" /> 
                                    
                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-14 font-bold text-left"> Description</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">This Item is yyyyyyrrrrr.</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Divider className="min-w-300" />


                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-14 font-bold  text-left"> SUK</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13  text-right">000112123</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-14 font-bold text-left">Unit</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">Kg</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />


                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-14 font-bold  text-left">Quantity</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13  text-right">500</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-14 font-bold  text-left">Price</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                <p className="mx-4 text-13 text-right">1000</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={6} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-14 font-bold text-left">Production Date</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={12} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13  text-right">03/05/2020</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-14 font-bold  text-left">Expiry Date</p>

                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >

                                                    <p className="mx-4 text-13  text-right">03/05/2021</p>

                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    
                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-14 font-bold  text-left">Available</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13  text-right">Yes</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>

                                </Grid>
                            </Card>

                            <Button
                                className=" m-4 py-2 flex"
                                variant="contained"
                                color="secondary"
                                onClick={handleClickOpen}
                                ><Icon >delete</Icon>
                                Delete product
                            </Button>

                        </Grid>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Card className="py-0" elevation={2}>
                            <Grid container className="mb-1" spacing={3} alignItems="center">
                                <div className="w-full overflow-auto">
                                    <Table className="whitespace-pre">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className="px-0">Name</TableCell>
                                                <TableCell className="px-0">Company</TableCell>
                                                <TableCell className="px-0">Start Date</TableCell>
                                                <TableCell className="px-0">Status</TableCell>
                                                <TableCell className="px-0">Amount</TableCell>
                                                <TableCell className="px-0">Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {subscribarList
                                                .slice(
                                                    page * rowsPerPage,
                                                    page * rowsPerPage + rowsPerPage
                                                )
                                                .map((subscriber, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell
                                                            className="px-0 capitalize"
                                                            align="left"
                                                        >
                                                            {subscriber.name}
                                                        </TableCell>
                                                        <TableCell
                                                            className="px-0 capitalize"
                                                            align="left"
                                                        >
                                                            {subscriber.company}
                                                        </TableCell>
                                                        <TableCell
                                                            className="px-0 capitalize"
                                                            align="left"
                                                        >
                                                            {subscriber.date}
                                                        </TableCell>
                                                        <TableCell className="px-0 capitalize">
                                                            {subscriber.status}
                                                        </TableCell>
                                                        <TableCell className="px-0 capitalize">
                                                            ${subscriber.amount}
                                                        </TableCell>
                                                        <TableCell className="px-0">
                                                            <IconButton>
                                                                <Icon color="error">close</Icon>
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                        </TableBody>
                                    </Table>

                                    <TablePagination
                                        className="px-4"
                                        rowsPerPageOptions={[5, 10, 25]}
                                        component="div"
                                        count={subscribarList.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        backIconButtonProps={{
                                            'aria-label': 'Previous Page',
                                        }}
                                        nextIconButtonProps={{
                                            'aria-label': 'Next Page',
                                        }}
                                        onChangePage={handleChangePage}
                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                    />
                                </div>
                            </Grid>

                        </Card>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    </TabPanel>

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


        </div>

    )
}

export default SimpleForm















