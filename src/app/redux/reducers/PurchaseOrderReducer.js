import {
    INSERT_PURCHASEORDER ,
    GET_PURCHASEORDER_LIST,
    GET_SINGLE_PURCHASEORDER ,
    CONVERT_PURCHASEORDER_TO_BILL,
    DELETE_PURCHASEORDER,
    UPDATE_PURCHASEORDER,
   } from '../actions/PurchaseOrderAction'
   
   const initialState = {
       purchaseOrderList: [],
   }
   
   const PurchaseOrderReducer = function (state = initialState, action) {
       switch (action.type) {
           case INSERT_PURCHASEORDER: {
               return {
                   ...state,
                   purchaseOrderList: [...action.payload],
               }
           }
           case GET_PURCHASEORDER_LIST: {
               return {
                   ...state,
                   purchaseOrderList: [...action.payload],
               }
           }
           case GET_SINGLE_PURCHASEORDER: {
               return {
                   ...state,
                   purchaseOrderList: [...action.payload],
               }
           }
           case CONVERT_PURCHASEORDER_TO_BILL: {
               return {
                   ...state,
                   purchaseOrderList: [...action.payload],
               }
           }
           case DELETE_PURCHASEORDER: {
               return {
                   ...state,
                   purchaseOrderList: [...action.payload],
               }
           }
           case UPDATE_PURCHASEORDER: {
               return {
                   ...state,
                   purchaseOrderList: [...action.payload],
               }
           }
           default: {
               return {
                   ...state,
               }
           }
       }
   }
   
   export default PurchaseOrderReducer
   