  
const initialState = {
    title: "",
    message: ""
}

const toastReducer = function (state = initialState, action) {
    switch (action.type) {
        case "SET_TITLE": {
            return {
                ...state,
                title: action.payload
            }
        }
        case "SET_ALL": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "SET_MESSAGE": {
            return {
                ...state,
                message: action.payload,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}
   
   export default toastReducer;