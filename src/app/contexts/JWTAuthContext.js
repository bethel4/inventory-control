import React, { createContext, useEffect, useReducer } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios.js'
import { MatxLoading } from 'app/components'
 import api from '../../axios'
import reducer from '../redux/reducers/authReducer'
import toastReducer from '../redux/reducers/toastReducer'
import { useDispatch } from 'react-redux';

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

// const isValidToken = (accessToken) => {
//     if (!accessToken) {
//         return false
//     }

//     const decodedToken = jwtDecode(accessToken)
//     const currentTime = Date.now() / 1000
//     console.log(decodedToken)
//     return decodedToken.exp > currentTime
// }

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('token', accessToken)
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    } else {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common.Authorization
    }
}



const AuthContext = createContext({
    ...initialState,
    method: 'JWT',
    login: () => Promise.resolve(),
    logout: () => {},
    register: () => Promise.resolve(),
    verifiy:() => Promise.resolve(),
    forgetPasswordL:() => Promise.resolve(),
    restPassword:() => Promise.resolve()
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    

    const login = ( email, password) => (dispatch) => {
        api
            .post('auth/login', {email, password })
            .then((res) => {
                
                setSession(res.data.token)
                console.log(res.data.token)
                dispatch({
                    type: 'LOGIN',
    
                    payload: {
                        isAuthenticated:true,
                      user:  res.data
                    }
    
                })
            })
    }
     
     const register = ( email, password,confirmPassword) => (dispatch) => {
        api
            .post('auth/signup', {email, password,confirmPassword })
            .then((res) => {
                console.log(res)
                dispatch({
                    type: 'REGISTER',
                    payload: res.data,
    
                })
            }).catch(e=>{ 
                dispatch({
                    type: 'SET_ALL',
                    payload: { message: e.message, title: "AUTH" }
                })

                // throw e;
//                console.log(e.message)
            })
            
    }
 

    const verifiy = (code,email) => (dispatch) => {
        
        api
            .patch('auth/activate', {code,email})
            .then((res) => {
                dispatch({
                    type: 'VERFIY',
                    payload: res.data,
    
                })
            })
    }
    const forgetPassword = (email) => (dispatch) => {
        api.patch('auth/forgot', {email})
            .then((res) => {
                dispatch({
                    type: 'FORGETPASSWORD',
                    payload: res.data,
    
                })
            })
    }
 
    const restPassword = (newPassword,confirmPassword) => (dispatch) => {
        
        api
            .patch('auth/reset', {newPassword,confirmPassword})
            .then((res) => {
                console.log(res)
                dispatch({
                    type: 'RESETPASSWORD',
                    payload: res.data,
                })
            }).catch(e=>{
                console.log(e)
            })
    }
    const logout = () => (dispatch) => {
        
        api
            .patch('auth/logout')
            .then((res) => {
                setSession(null)
                dispatch({
                    type: 'LOGOUT',
                    payload: res.data,
    
                })
            })
    }
   

    useEffect(() => {
        ;(async () => {
            try {
                const accessToken = window.localStorage.getItem('token')

                if (accessToken){
                    console.log(accessToken)
                    setSession(accessToken)
                    
                    const response =  api.get('/auth/profile')
                    console.log(response.data)
                  
                    

                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: true,
                            user:window.localStorage.getItem('email')
                        },
                    })
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    })
                }
            } catch (err) {
                console.error(err)
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
        })()
    }, [])

    if (!state.isInitialised) {
        return <MatxLoading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'JWT',
                login,
                logout,
                register,
                verifiy,
                forgetPassword,
                restPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
