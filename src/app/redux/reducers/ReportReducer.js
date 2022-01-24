import {
    GET_QUANTITY_ONHAND,
    GET_QUANTITY_TORECIVE,
    GET_ITEM_PURCHASE ,
    GET_SINGLE_ITEM ,
    GET_PURCHASE_ORDER,
    GET_INOVICE_REPORT,
    GET_SALEORDER_REPORT,
    GET_BILL
   } from '../actions/ReportAction'
 
   const initialState = {
    reportList: [],
   }
   
   const reportReducer = function (state = initialState, action) {
       switch (action.type) {
           case GET_QUANTITY_ONHAND: {
               return {
                   ...state,
                   reportList: [...action.payload.values],
               }
           }
           case GET_QUANTITY_TORECIVE: {
            return {
                ...state,
                reportList: [...action.payload],
            }
        }
           case GET_ITEM_PURCHASE: {
               return {
                   ...state,
                   reportList: [...action.payload],
               }
           }
           case GET_SINGLE_ITEM: {
               return {
                   ...state,
                   reportList: [...action.payload],
               }
           }
           case GET_INOVICE_REPORT: {
               return {
                   ...state,
                   reportList: [...action.payload.values],
               }
           }
           case GET_PURCHASE_ORDER: {
            return {
                ...state,
                reportList: [...action.payload.values],
            }
        }
        case GET_SALEORDER_REPORT: {
            return {
                ...state,
                reportList: [...action.payload.values],
            }
        }
        case GET_BILL: {
            return {
                ...state,
                reportList: [...action.payload.values],
            }
        }
           default: {
               return {
                   ...state,
               }
           }
       }
   }
   
   export default reportReducer
   