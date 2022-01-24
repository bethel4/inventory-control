import api from '../../../axios'

export const GET_Bill_LIST = 'GET_Bill_LIST'
export const GET_SINGLE_BILL = 'GET_SINGLE_BILL'
export const CHANGE_BILL_STATUS = 'CHANGE_BILL_STATUS'


export const getBillList = () => (dispatch) => {
    api.get('/bill/').then((res) => {
        dispatch({
            type: GET_Bill_LIST,
            payload: res.data,
        })
    })
}

export const getSingleBill = (uid, billId) => (dispatch) => {
    api
        .get('/bill/:id', { uid, billId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_BILL,
                payload: res.data,
            })
        })
}
export const changeBillStatus = (uid, billId, data) => (dispatch) => {
    api
        .patch('/bill/change-status/:id', { uid, billId, data })
        .then((res) => {
            dispatch({
                type: CHANGE_BILL_STATUS,
                payload: res.data,
            })
        })
}
