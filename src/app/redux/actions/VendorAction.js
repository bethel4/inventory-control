import api from '../../../axios'

export const INSERT_VENDOR = 'INSERT_VENDOR'
export const GET_VENDOR_LIST = 'GET_VENDOR_LIST'
export const GET_SINGLE_VENDOR = 'GET_SINGLE_VENDOR'
export const DELETE_VENDOR = 'DELETE_VENDOR'
export const UPDATE_VENDOR = 'UPDATE_VENDOR'

export const insertVendor = (data) => (dispatch) => {
    api
        .post('/supplier/insert-supplier', { data })
        .then((res) => {
            dispatch({
                type: INSERT_VENDOR,
                payload: res.data,
            })
            dispatch(getVendorList())
        })
}
export const getVendorList = () => (dispatch) => {
    api.get('/supplier/get-suppliers').then((res) => {
        dispatch({
            type: GET_VENDOR_LIST,
            payload: res.data,
        })
    })
}

export const getSingleVendor = ( vendorId) => (dispatch) => {
    api
        .get(`/supplier/get-supplier/${vendorId}`, { vendorId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_VENDOR,
                payload: res.data,
            })
        })
}

export const deleteVendor = ( vendorId) => (dispatch) => {
    api
        .delete(`/supplier/remove-supplier/${vendorId}`, {  vendorId })
        .then((res) => {
            dispatch({
                type: DELETE_VENDOR,
                payload: res.data,
            })
            dispatch(getVendorList())
        })
}

export const updateVendor = ( data,vendorId ) => (dispatch) => {
    api
        .patch(`/supplier/patch-supplier/${vendorId}`, {  data, vendorId })
        .then((res) => {
            dispatch({
                type: UPDATE_VENDOR,
                payload: res.data,
            })
            dispatch(getVendorList())
        })
}
