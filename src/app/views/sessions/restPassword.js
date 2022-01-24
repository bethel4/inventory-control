import React, { useState } from 'react'
import {
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
    Button,
} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import useAuth from 'app/hooks/useAuth'
import history from 'history.js'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
}))

const RestPassword = () => {
    const classes = useStyles()
    const [ state, setState] = useState({})
    const [message, setMessage] = useState('')
    const { restPassword } = useAuth()
    const dispatch = useDispatch()
    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleFormSubmit = (event) => {
   
        try {
            localStorage.setItem('email',state.email)
            console.log(state.email)
            console.log( localStorage.getItem('email'))
            dispatch(restPassword(state.newPassword,state.confirmPassword))
            history.push('/session/signin')   
        } catch (e) {
            console.log(e)
            setMessage(e.message)
           debugger
        }
    }

    let {  newPassword,confirmPassword } = state

    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8 flex justify-center bg-light-gray items-center h-full">
                            <img
                                className="w-full"
                                src="/assets/images/illustrations/posting_photo.svg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-4 w-full"
                                    label="newPassword"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="newPassword"
                                    type="password"
                                    value={newPassword || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                {message && (
                                    <p className="text-error">{message}</p>
                                    )}

                                <TextValidator
                                    className="mb-4 w-full"
                                    label="Confirm Password"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="confirmPassword"
                                    type="password"
                                    value={confirmPassword|| ''}
                                    validators={['required']}
                                    errorMessages={['this field is required',
                                                    'passs']}
                                />
                                <div className="flex items-center">
                                    <Button
                                        className="capitalize"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Reset
                                    </Button>
                                    <span className="mx-2 ml-5">or</span>
                                    <Link to="/session/signin">
                                        <Button className="capitalize">
                                            Sign in
                                        </Button>
                                    </Link>
                                </div>
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default RestPassword

