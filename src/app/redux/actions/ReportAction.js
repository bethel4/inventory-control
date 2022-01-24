import api from '../../../axios'

export const INSERT_VENDOR = 'INSERT_VENDOR'
export const GET_QUANTITY_ONHAND = 'GET_QUANTITY_ONHAND'
export const GET_QUANTITY_TORECIVE = 'GET_QUANTITY_TORECIVE'
export const GET_SALEORDER_REPORT= 'GET_SALEORDER_REPORT'
export const GET_INOVICE_REPORT = 'GET_INOVICE_REPORT'
export const GET_PURCHASE_ORDER = 'GET_PURCHASE_ORDER'
export const GET_BILL = 'GET_BILL'
export const GET_SINGLE_ITEM = 'GET_SINGLE_ITEM'
export const GET_ITEM_PURCHASE = 'GET_ITEM_PURCHASE'

export const getquantityOnHand = () => (dispatch) => {
    console.log("api works")
    api.get('/reports/quantity-on-hand').then((res) => {
        console.log('sfs')
        dispatch({
            type: GET_QUANTITY_ONHAND,
            payload: res.data,
        })
    })
}
export const getquantityToRecive = () => (dispatch) => {
    api.get('/reports/quantity-to-recive').then((res) => {
        dispatch({
            type: GET_QUANTITY_TORECIVE,
            payload: res.data,
        })
    })
}

export const getsaleorders= () => (dispatch) => {
    api.get('/reports/saleorders').then((res) => {
        dispatch({
            type: GET_SALEORDER_REPORT,
            payload: res.data,
        })
    })
}

export const getinvoices = () => (dispatch) => {
    api.get('/reports/invoices').then((res) => {
        dispatch({
            type: GET_INOVICE_REPORT,
            payload: res.data,
        })
    })
}

export const getpurchaseorders = () => (dispatch) => {
    api.get('/reports/purchaseorders').then((res) => {
        dispatch({
            type: GET_PURCHASE_ORDER,
            payload: res.data,
        })
    })
}
export const getbills= () => (dispatch) => {
    api.get('/reports/bills').then((res) => {
        dispatch({
            type: GET_BILL,
            payload: res.data,
        })
    })
}
export const getspecificItemSale= () => (dispatch) => {
    api.get('/reports/specific-item-sale').then((res) => {
        dispatch({
            type: GET_SINGLE_ITEM,
            payload: res.data,
        })
    })
}
export const getspecificItemPurchase= () => (dispatch) => {
    api.get('/reports/specific-item-purchase').then((res) => {
        dispatch({
            type: GET_ITEM_PURCHASE,
            payload: res.data,
        })
    })
}