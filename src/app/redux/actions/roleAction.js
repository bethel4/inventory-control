import api from '../../../axios'

export const INSERT_ROLE = 'INSERT_ROLE'
export const GET_ROLE_LIST = 'GET_ROLE_LIST'
export const GET_SINGLE_ROLE = 'GET_SINGLE_ROLE'

export const insertCustomer = ( data) => (dispatch) => {
    api
        .post('/resource/insert-resource', {data })
        .then((res) => {
            dispatch({
                type: INSERT_ROLE,

                payload: res.data,

            })
         
        })
}
export const getRole = () => (dispatch) => {
    api.get('/resource/list-resource').then((res) => {
        dispatch({
            type: GET_ROLE_LIST,
            payload: res.data,
        })
    })
}

export const getSingleCustomer = (uid, customerId) => (dispatch) => {
    api
        .get('/resource/defaultResources/:roleId', { uid, customerId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_ROLE,
                payload: res.data,
            })
        })
}








// import axios from 'axios';
// const api = axios.create({
//     baseURL: 'http://localhost:3600'
// })



// api.get('/customer/get-customers').then(res => {
//     console.log(res.data)
// })
