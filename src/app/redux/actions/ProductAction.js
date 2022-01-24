import api from '../../../axios'

export const INSERT_PRODUCT = 'INSERT_PRODUCT'
export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST'
export const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const insertProduct = ( data) => (dispatch) => {
    api
        .post('/item/insert-item', {data })
        .then((res) => {
            dispatch({
                type: INSERT_PRODUCT,

                payload: res.data,

            })
            dispatch(getProductList())
        })
}

export const getProductList = () => (dispatch) => {
    api.get('/item/get-items').then((res) => {
        console.log(res.data)
        dispatch({
            type: GET_PRODUCT_LIST,
            payload: res.data,
        })
        
    })
}

export const getSingleProduct = (productId) => (dispatch) => {
    api
        .get(`/item/get-item/${ productId }`, { productId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_PRODUCT,
                payload: res.data,
            })
        })
}

export const deleteProduct = (productId ) => (dispatch) => {
    console.log(productId )
    api
        .delete(`/item/remove-item/${productId }`,{productId })
        .then((res) => {
            dispatch({
                type: DELETE_PRODUCT,
                payload: res.data,
            })
            dispatch(getProductList())
        })
}


export const updateProduct = ( data,productId  ) => (dispatch) => {
    api
        .patch(`/item/patch-item/${productId}`, { data, productId })
        .then((res) => {
            dispatch({
                
                type: UPDATE_PRODUCT,
              
                payload: res.data,
            })
            dispatch(getProductList())
        })
       
}




