import { values } from 'lodash'
import {
    INSERT_CUSTOMER,
 GET_CUSTOMER_LIST,
 GET_SINGLE_CUSTOMER ,
DELETE_CUSTOMER ,
UPDATE_CUSTOMER,
} from '../actions/CustomerAction'

const initialState = {
    customerList: [],
}

const CustomerReducer = function (state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        
        case INSERT_CUSTOMER: {
            return {
                ...state,
                customerList: [...action.payload.values],
            }
        }
        case GET_CUSTOMER_LIST: {
            return {
                ...state,
                customerList: [...action.payload],
            }
        }
        case GET_SINGLE_CUSTOMER: {
            console.log(action.payload.values)
            return {
                ...state,
                customerList: [...action.payload.values],
                
            }
        }
        case DELETE_CUSTOMER: {
            return {
                ...state,
                customerList: [...action.payload],
            }
        }
        case UPDATE_CUSTOMER: {
            return {
                ...state,
                customerList: [...action.payload.values],
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default CustomerReducer
