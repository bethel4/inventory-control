import {
    INSERT_PRODUCT,
 GET_PRODUCT_LIST,
 GET_SINGLE_PRODUCT ,
DELETE_PRODUCT ,
UPDATE_PRODUCT,
} from '../actions/ProductAction'

const initialState = {
    productList: [],
}

const ProductReducer = function (state = initialState, action) {
    
    switch (action.type) {
        
        case INSERT_PRODUCT: {
            return {
                ...state,
                productList: [...action.payload.values],
            }
        }
        case GET_PRODUCT_LIST: {
            return {
                ...state,
                productList: [...action.payload],
            }
        }
        case GET_SINGLE_PRODUCT: {
            return {
                ...state,
                productList: [...action.payload],
            }
        }
        case DELETE_PRODUCT: {
            return {
                ...state,
                productList: [...action.payload],
            }
        }
        case UPDATE_PRODUCT: {
            return {
                ...state,
                productList: [...action.payload.values],
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default ProductReducer
