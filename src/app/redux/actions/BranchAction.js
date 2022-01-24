import api from '../../../axios'

export const INSERT_BRANCH = 'INSERT_BRANCH'
export const GET_BRANCH_LIST = 'GET_BRANCH_LIST'
export const GET_SINGLE_BRANCH = 'GET_SINGLE_BRANCH'
export const DELETE_BRANCH= 'DELETE_BRANCH'
export const UPDATE_BRANCH = 'UPDATE_BRANCH'

export const insertBranch = (uid, data) => (dispatch) => {
    api
        .post('/branch/insert-branch', { uid, data })
        .then((res) => {
            dispatch({
                type: INSERT_BRANCH,
                payload: res.data,
            })
        })
}

export const getBranchList = () => (dispatch) => {
    api.get('/branch/get-branchs').then((res) => {
        dispatch({
            type: GET_BRANCH_LIST,
            payload: res.data,
        })
    })
}

export const getSingleBranch = (uid, branchId) => (dispatch) => {
    api
        .get('/branch/get-branch/:branchId', { uid, branchId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_BRANCH,
                payload: res.data,
            })
        })
}

export const deleteBranch = (uid, branchId) => (dispatch) => {
    api
        .delete('/branch/remove-branch/:branchId', { uid, branchId })
        .then((res) => {
            dispatch({
                type: DELETE_BRANCH,
                payload: res.data,
            })
        })
}

export const updateBranch = (uid, branchId, data) => (dispatch) => {
    api
        .patch('/branch/patch-branch/:branchId', { uid, branchId, data })
        .then((res) => {
            dispatch({
                type: UPDATE_BRANCH,
                payload: res.data,
            })
        })
}
