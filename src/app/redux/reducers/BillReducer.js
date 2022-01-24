import {
    
    GET_Bill_LIST,
    GET_SINGLE_BILL ,
    CHANGE_BILL_STATUS ,
   } from '../actions/BillAction'
   
   const initialState = {
       billList: [],
   }
   
   const billReducer = function (state = initialState, action) {
       switch (action.type) {
        case GET_Bill_LIST: {
            return {
                ...state,
                billList: [...action.payload],
            }
        }
           case GET_SINGLE_BILL: {
               return {
                   ...state,
                   billList: [...action.payload],
               }
           }
           case CHANGE_BILL_STATUS: {
               return {
                   ...state,
                   billList: [...action.payload],
               }
           }
           default: {
               return {
                   ...state,
               }
           }
       }
   }
   
   export default billReducer
   