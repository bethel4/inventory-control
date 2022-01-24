import {
    INSERT_SALEORDER ,
    GET_SALEORDER_LIST,
    GET_SINGLE_SALEORDER ,
    CONVERT_SALEORDER_TO_INVOICE,
    DELETE_SALEORDER,
    UPDATE_SALEORDER,
   } from '../actions/SaleOrderAction'
   
   const initialState = {
       saleOrderList: [],
   }
   
   const SaleOrderReducer = function (state = initialState, action) {
       switch (action.type) {
           case INSERT_SALEORDER: {
               return {
                   ...state,
                   saleOrderList: [...action.payload],
               }
           }
           case GET_SALEORDER_LIST: {
               return {
                   ...state,
                   saleOrderList: [...action.payload],
               }
           }
           case GET_SINGLE_SALEORDER: {
               return {
                   ...state,
                   saleOrderList: [...action.payload],
               }
           }
           case CONVERT_SALEORDER_TO_INVOICE: {
               return {
                   ...state,
                   saleOrderList: [...action.payload],
               }
           }
           case DELETE_SALEORDER: {
               return {
                   ...state,
                   saleOrderList: [...action.payload],
               }
           }
           case UPDATE_SALEORDER: {
               return {
                   ...state,
                   saleOrderList: [...action.payload],
               }
           }
           default: {
               return {
                   ...state,
               }
           }
       }
   }
   
   export default SaleOrderReducer
   