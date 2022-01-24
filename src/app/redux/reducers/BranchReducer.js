import {
    INSERT_BRANCH,
    GET_BRANCH_LIST,
    GET_SINGLE_BRANCH ,
    DELETE_BRANCH ,
    UPDATE_BRANCH,
   } from '../actions/BranchAction'
   
   const initialState = {
       branchList: [],
   }
   
   const BranchReducer = function (state = initialState, action) {
       switch (action.type) {
           case GET_BRANCH_LIST: {
               return {
                   ...state,
                   branchList: [...action.payload],
               }
           }
           case INSERT_BRANCH: {
            return {
                ...state,
                branchList: [...action.payload],
            }
        }
           case GET_SINGLE_BRANCH: {
               return {
                   ...state,
                   branchList: [...action.payload],
               }
           }
           case DELETE_BRANCH: {
               return {
                   ...state,
                   branchList: [...action.payload],
               }
           }
           case UPDATE_BRANCH: {
               return {
                   ...state,
                   branchList: [...action.payload],
               }
           }
           default: {
               return {
                   ...state,
               }
           }
       }
   }
   
   export default BranchReducer
   