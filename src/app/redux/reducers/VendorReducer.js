import {
    INSERT_VENDOR,
    GET_VENDOR_LIST,
    GET_SINGLE_VENDOR ,
    DELETE_VENDOR ,
    UPDATE_VENDOR,
   } from '../actions/VendorAction'
   
   const initialState = {
    vendorList: [],
   }
   
   const VendorReducer = function (state = initialState, action) {
       switch (action.type) {
           case INSERT_VENDOR: {
               return {
                   ...state,
                   vendorList: [...action.payload.values],
               }
           }
           case GET_VENDOR_LIST: {
            return {
                ...state,
                vendorList: [...action.payload],
            }
        }
           case GET_SINGLE_VENDOR: {
               return {
                   ...state,
                   vendorList: [...action.payload],
               }
           }
           case DELETE_VENDOR: {
               return {
                   ...state,
                   vendorList: [...action.payload],
               }
           }
           case UPDATE_VENDOR: {
               return {
                   ...state,
                   vendorList: [...action.payload.values],
               }
           }
           default: {
               return {
                   ...state,
               }
           }
       }
   }
   
   export default VendorReducer
   