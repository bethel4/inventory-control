import {
    INSERT_ROLE,
  GET_ROLE_LIST,
 GET_SINGLE_ROLE
} from '../actions/roleAction'

const initialState = {
    roleList: [],
}

const RoleReducer = function (state = initialState, action) {
    
    switch (action.type) {
        
        case INSERT_ROLE: {
            return {
                ...state,
                roleList: [...action.payload.values],
            }
        }
        case GET_ROLE_LIST: {
            console.log(action.payload)
            return {
                ...state,
                roleList: [...action.payload],
            }
        }
        case GET_SINGLE_ROLE: {
            return {
                ...state,
                roleList: [...action.payload],
            }
        }
       
        default: {
            return {
                ...state,
            }
        }
    }
}

export default RoleReducer
