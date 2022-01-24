import api from '../../../axios'

export const INSERT_CUSTOMER = 'INSERT_CUSTOMER'
export const GET_CUSTOMER_LIST = 'GET_PRODUCT_LIST'
export const GET_SINGLE_CUSTOMER = 'GET_SINGLE_CUSTOMER'
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER'

export const insertCustomer = ( data) => (dispatch) => {
    api
        .post('/customer/insert-customer', {data })
        .then((res) => {
            dispatch({
                type: INSERT_CUSTOMER,

                payload: res.data,

            })
            dispatch(getCustomerList())
        })
}
export const getCustomerList = () => (dispatch) => {
    api.get('/customer/get-customers').then((res) => {
        dispatch({
            type: GET_CUSTOMER_LIST,
            payload: res.data,
        })
    })
}

export const getSingleCustomer = ( customerId) => (dispatch) => {
    api
        .get(`/customer/get-customer/${customerId}`, {  customerId })
        .then((res) => {
            console.log(res)
            dispatch({
                type: GET_SINGLE_CUSTOMER,
                payload: res.data,
            })
        })
}

export const deleteCustomer = (customerId) => (dispatch) => {
    console.log(customerId)
    api
        .delete(`/customer/remove-customer/${customerId}`,{customerId})
        .then((res) => {
            dispatch({
                type: DELETE_CUSTOMER,
                payload: res.data,
            })
            dispatch(getCustomerList())
        })
}

export const updateCustomer = ( data,customerId ) => (dispatch) => {
    api
        .patch(`/customer/patch-customer/${customerId}`, { data, customerId})
        .then((res) => {
            dispatch({
                
                type: UPDATE_CUSTOMER,
              
                payload: res.data,
            })
            dispatch(getCustomerList())
        })
       
}





// import axios from 'axios';
// const api = axios.create({
//     baseURL: 'http://localhost:3600'
// })



// api.get('/customer/get-customers').then(res => {
//     console.log(res.data)
// })
