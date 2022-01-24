import {
    INSERT_WAREHOUSE,
    GET_WAREHOUSE_LIST,
    GET_SINGLE_WAREHOUSE ,
    DELETE_WAREHOUSE ,
    UPDATE_WAREHOUSE,
   } from '../actions/WarehouseAction'
   
   const initialState = {
       warehouseList: [],
   }
   
   const WarehouseReducer = function (state = initialState, action) {
       switch (action.type) {
           case INSERT_WAREHOUSE: {
               return {
                   ...state,
                   warehouseList: [...action.payload],
               }
           }
           case GET_WAREHOUSE_LIST: {
            return {
                ...state,
                warehouseList: [...action.payload],
            }
        }
           case GET_SINGLE_WAREHOUSE: {
               return {
                   ...state,
                   warehouseList: [...action.payload],
               }
           }
           case DELETE_WAREHOUSE: {
               return {
                   ...state,
                   warehouseList: [...action.payload],
               }
           }
           case UPDATE_WAREHOUSE: {
               return {
                   ...state,
                   warehouseList: [...action.payload],
               }
           }
           default: {
               return {
                   ...state,
               }
           }
       }
   }
   
   export default WarehouseReducer
   