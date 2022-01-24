import api from '../../../axios'

export const GET_PURCHASEORDER_LIST = 'GET_PURCHASEORDER_LIST'
export const INSERT_PURCHASEORDER = 'INSERT_PURCHASEORDER'
export const GET_SINGLE_PURCHASEORDER = 'GET_SINGLE_PURCHASEORDER'
export const CONVERT_PURCHASEORDER_TO_BILL = 'CONVERT_PURCHASEORDER_TO_BILL'
export const DELETE_PURCHASEORDER = 'DELETE_PURCHASEORDER'
export const UPDATE_PURCHASEORDER = 'UPDATE_PURCHASEORDER'

export const addPurchaseOrder = ( data ) => (dispatch) => {
    api
        .post('/purchase-order/insert-PO', {  data })
        .then((res) => {
            dispatch({
                type: INSERT_PURCHASEORDER,
                payload: res.data,
            })
            dispatch(getPurchaseOrderList())
        })
}


export const getPurchaseOrderList = () => (dispatch) => {
    api.get('/purchase-order/list-PO').then((res) => {
        dispatch({
            type: GET_PURCHASEORDER_LIST,
            payload: res.data,
        })
    })
}

export const ConvertToBill = (PurchaseOrderId) => (dispatch) => {
    api
        .get(`/purchase-order/convert-to-bill/${PurchaseOrderId}`, {  PurchaseOrderId })
        .then((res) => {
            dispatch({
                type: CONVERT_PURCHASEORDER_TO_BILL,
                payload: res.data,
            })
        })
}

export const getSinglePurchaseOrder = (PurchaseOrderId) => (dispatch) => {
    api
        .get(`/purchase-order/${PurchaseOrderId}`, {  PurchaseOrderId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_PURCHASEORDER,
                payload: res.data,
            })
        })
}

export const deletePurchaseOrder = (uid, PurchaseOrderId) => (dispatch) => {
    api
        .delete(`/purchase-order/remove-PO/${PurchaseOrderId}`, { uid, PurchaseOrderId })
        .then((res) => {
            dispatch({
                type: DELETE_PURCHASEORDER,
                payload: res.data,
            })
            dispatch(getPurchaseOrderList())
        })
}

export const updatePurchaseOrder = (data ,PurchaseOrderId) => (dispatch) => {
    api
        .patch(`/purchase-order/update-PO/${PurchaseOrderId}`, { data ,PurchaseOrderId })
        .then((res) => {
            dispatch({
                type: UPDATE_PURCHASEORDER,
                payload: res.data,
            })
            dispatch(getPurchaseOrderList())
        })
}
