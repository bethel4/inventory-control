import React, { useState } from 'react'
import {
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
    Button,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Link } from 'react-router-dom'


const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#ffffff',
    },
    card: {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
}))

const JwtRegister = () => {
    const classes = useStyles()
    const toast = useSelector((state) => state.toast);
    


    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            {
                !!toast.message?
                <>
                    <div>{toast.title}</div>
                    <div>{toast.message}</div>
                </>
                : null
                
            }
            
                <Grid container>
                <Grid item lg={3} md={5} sm={5} xs={12}>
                
                    </Grid>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                    <div className="text-32 font-bold">  Orbit Inventory Control System.
                        <div className="text-14"> Timely, Efficent and Reliable</div>
                        </div>
                    </Grid>

                    <Grid item lg={3} md={5} sm={5} xs={12}>
                   
                    </Grid>

                    <Grid item lg={3} md={5} sm={5} xs={12}>
                    <div className="flex items-center">
                    <Link to="/session/signup">
                        <Button
                            className="capitalize"
                            variant="contained"
                            color="primary"
                        >
                            Sign up
                        </Button>
                        </Link>
                        <span className="mx-2 ml-5"> </span>
                        <Link to="/session/signin">
                            <Button className="capitalize"
                                        variant="contained"
                                        color="primary"
                            
                                >
                                Sign in
                            </Button>
                        </Link>
                    </div>
                    </Grid>

                    

                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8 flex justify-center items-center h-full">
                            <img
                                className="w-full"
                                src="/assets/images/landing.jpg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-2 h-full">
                            
                        <div className="text-28 font-bold">  Make your Inventory Better.
                                <br/> <div className="text-16"> Save your time, Manage your product efficently!</div>
                                <div className="text-32 font-bold">  Make your Inventory Better, Fast and Great.</div>
                                </div> <br/> <br/> 
                                <div className="p- flex justify-right items-right h-small">
                            <img
                                className="w-small"
                                src="/assets/images/iinve.jpg"
                                alt=""
                            />
                        </div>
                            
                        </div>
                    </Grid>


                    <Grid item lg={6} md={7} sm={7} xs={12}>
                        <div className="p-6 h-full">
                            
                        <div className="text-32 font-bold">  Make your Inventory Better.
                                    
                                 <div className="flex items-center">
                                <Link to="/session/signup">
                                    <Button
                                        className="capitalize"
                                        variant="contained"
                                        color="secondary"
                                    >
                                      <div className="text-18 font-bold">  Get Started </div>
                                    </Button>
                                </Link>
                                </div>
                             </div>    
                            
                        </div>
                    </Grid>
                </Grid>
            
        </div>
    )
}

export default JwtRegister