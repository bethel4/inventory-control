import {
    
    GET_USERS_LIST,
    ADD_USER ,
    GET_SINGLE_USER ,
    ASSIGN_PRIVILAGE,
    DELETE_USER,
    UPDATE_USER,
   } from '../actions/UserAction'
   
   const initialState = {
       userList: [],
   }
   
   const UserReducer = function (state = initialState, action) {
       switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                userList: [...action.payload],
            }
        }
           case GET_USERS_LIST: {
               return {
                   ...state,
                   userList: [...action.payload],
               }
           }
           case GET_SINGLE_USER: {
               return {
                   ...state,
                   userList: [...action.payload],
               }
           }
           case ASSIGN_PRIVILAGE: {
               return {
                   ...state,
                   userList: [...action.payload],
               }
           }
           case DELETE_USER: {
               return {
                   ...state,
                   userList: [...action.payload],
               }
           }
           case UPDATE_USER: {
               return {
                   ...state,
                   userList: [...action.payload],
               }
           }
           default: {
               return {
                   ...state,
               }
           }
       }
   }
   
   export default UserReducer
   