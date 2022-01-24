import api from '../../../axios'

export const GET_INVOICE_LIST = 'GET_INVOICE_LIST'
export const GET_SINGLE_INVOICE = 'GET_SINGLE_INVOICE'
export const CHANGE_INVOICE_STATUS = 'CHANGE_INVOICE_STATUS'


export const getInvoiceList = () => (dispatch) => {
    api.get('/invoice').then((res) => {
        dispatch({
            type: GET_INVOICE_LIST,
            payload: res.data,
        })
    })
}

export const getSingleInvoice = (uid, invoiceId) => (dispatch) => {
    api
        .get('/invoice/:id', { uid, invoiceId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_INVOICE,
                payload: res.data,
            })
        })
}
export const changeInvoiceStatus = (uid, invoiceId, data) => (dispatch) => {
    console.log(uid, invoiceId, data)
    api
        .patch('/invoice/change-status/:id', { uid, invoiceId, data })
        .then((res) => {
            dispatch({
                type: CHANGE_INVOICE_STATUS,
                payload: res.data,
            })
        })
}
