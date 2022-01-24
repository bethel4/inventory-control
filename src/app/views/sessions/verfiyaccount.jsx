import React, { useState } from 'react'
import { Card, Grid, Button } from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import history from 'history.js'
import { Store } from 'app/redux/Store'
import { useDispatch} from 'react-redux';
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

const VerfiyCode = (props) => {
    
    const [state, setState] = useState({})
    const classes = useStyles()
    const { verifiy } = useAuth()
    const dispatch = useDispatch()
    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value,
        })

    }
    const handleFormSubmit = (event) => {
        try {
            const email =  localStorage.getItem('email')
            dispatch(verifiy(state.code,email))
            history.push('/')   
        } catch (e) {
            console.log(e)
        }
    }
    let { code } = state

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
                        <div className="p-8 flex justify-center items-center h-full">
                            <img
                                className="w-full"
                                src="/assets/images/illustrations/dreamer.svg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full bg-light-gray relative">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    label="Verfiy Account"
                                    onChange={handleChange}
                                    type="text"
                                    name="code"
                                    size="small"
                                    value={code || ''}
                                    validators={['required']}
                                    errorMessages={[
                                        'this field is required',
                                    ]}
                                />
                                <div className="flex items-center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                       Verfiy Account
                                    </Button>
                                   
                                    
                                </div>
                                <br/>
                                    <div className="text-green font-bold">
                                        Check your email for verification code.
                                    </div>
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default VerfiyCode
