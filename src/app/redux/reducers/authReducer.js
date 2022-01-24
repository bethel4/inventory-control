 
 const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, user } = action.payload
console.log(action.payload)
            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            localStorage.setItem('token', action.payload.user.token);
            console.log(action.payload.user.user)
            return {
                ...state,
                isAuthenticated: true,
                user:action.payload.user.user
            }
        }
        case 'LOGOUT': {
            console.log(action.payload)
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        case 'REGISTER':  
        console.log( action.payload.user)
       
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          user: action.payload.user,
          
        };
        case 'VERFIY':  
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          user: action.payload.user
        };
        case 'FORGETPASSWORD':  
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          user: action.payload.user
        };
        case 'RESETPASSWORD':  
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          user: action.payload.user
        };
        default: {
            return { ...state }
        }
    }
}



 export default reducer
