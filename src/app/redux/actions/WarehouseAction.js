import api from '../../../axios'

export const INSERT_WAREHOUSE= 'INSERT_WAREHOUSE'
export const GET_WAREHOUSE_LIST = 'GET_WAREHOUSE_LIST'
export const GET_SINGLE_WAREHOUSE = 'GET_SINGLE_WAREHOUSE'
export const DELETE_WAREHOUSE = 'DELETE_WAREHOUSE'
export const UPDATE_WAREHOUSE= 'UPDATE_WAREHOUSE'

export const insertWarehouse = (uid, data) => (dispatch) => {
    api
        .patch('/insert-warehouse', { uid, data })
        .then((res) => {
            dispatch({
                type: INSERT_WAREHOUSE,
                payload: res.data,
            })
        })
}

export const getWarehouseList = () => (dispatch) => {
    api.get('/warehouse/get-warehouse').then((res) => {
        dispatch({
            type: GET_WAREHOUSE_LIST,
            payload: res.data,
        })
    })
}

export const getSingleWarehouse = (uid, warehouseId) => (dispatch) => {
    api
        .get('/get-warehouse/:warehouseId', { uid, warehouseId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_WAREHOUSE,
                payload: res.data,
            })
        })
}

export const deleteWarehouse = (uid, warehouseId) => (dispatch) => {
    api
        .delete('/remove-warehouse/:warehouseId', { uid, warehouseId })
        .then((res) => {
            dispatch({
                type: DELETE_WAREHOUSE,
                payload: res.data,
            })
        })
}

export const updateWarehouse = (uid, warehouseId, data) => (dispatch) => {
    api
        .patch('/patch-warehouse/:warehouseId', { uid, warehouseId, data })
        .then((res) => {
            dispatch({
                type: UPDATE_WAREHOUSE,
                payload: res.data,
            })
        })
}
