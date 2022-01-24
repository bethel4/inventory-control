import api from '../../../axios'

export const GET_USERS_LIST = 'GET_USERS_LIST'
export const ADD_USER = 'GET_USERS_LIST'
export const GET_SINGLE_USER = 'GET_SINGLE_USER'
export const ASSIGN_PRIVILAGE = 'ASSIGN_PRIVILAGE'
export const DELETE_USER = 'DELETE_USER'
export const UPDATE_USER = 'UPDATE_USER'


export const addUser = (uid, data) => (dispatch) => {
    api
        .patch('/user/insert-user', { uid, data })
        .then((res) => {
            dispatch({
                type: ADD_USER,
                payload: res.data,
            })
        })
}

export const getUserList = () => (dispatch) => {
    api.get('/user/list-users').then((res) => {
        dispatch({
            type: GET_USERS_LIST,
            payload: res.data,
        })
    })
}

export const getSingleUser = (uid, userId) => (dispatch) => {
    api
        .get('/user/:userId', { uid, userId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_USER,
                payload: res.data,
            })
        })
}
export const AssignPrivilageToUser = (uid, userId, data) => (dispatch) => {
    api
        .patch('/user/assign-privilages', { uid, userId, data })
        .then((res) => {
            dispatch({
                type: ASSIGN_PRIVILAGE,
                payload: res.data,
            })
        })
}

export const deleteUser = (uid, userId) => (dispatch) => {
    api
        .delete('/user/remove-users/:userId', { uid, userId })
        .then((res) => {
            dispatch({
                type: DELETE_USER,
                payload: res.data,
            })
        })
}

export const updateUser = (uid, userId, data) => (dispatch) => {
    api
        .patch('/user/update-users/:userId', { uid, userId, data })
        .then((res) => {
            dispatch({
                type: UPDATE_USER,
                payload: res.data,
            })
        })
}
