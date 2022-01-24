import {
    
    GET_INVOICE_LIST,
    GET_SINGLE_INVOICE ,
    CHANGE_INVOICE_STATUS ,
   } from '../actions/InvoiceAction'
   
   const initialState = {
       invoiceList: [],
   }
   
   const invoiceReducer = function (state = initialState, action) {
       switch (action.type) {
        case GET_INVOICE_LIST: {
            return {
                ...state,
                invoiceList: [...action.payload],
            }
        }
           case GET_SINGLE_INVOICE: {
               return {
                   ...state,
                   invoiceList: [...action.payload],
               }
           }
           case CHANGE_INVOICE_STATUS: {
               return {
                   ...state,
                   invoiceList: [...action.payload],
               }
           }
           default: {
               return {
                   ...state,
               }
           }
       }
   }
   
   export default invoiceReducer
   