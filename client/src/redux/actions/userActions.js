import * as types from './actionTypes.js';
import * as userApi from '../../api/userApi.js'
import {beginApiCall, apiCallError} from './apiStatusActions.js'

export function loadUsers(){
    return function(dispatch){
        dispatch(beginApiCall());
        return userApi.getUsers()
        .then(users => {
            dispatch(loadUsersSuccess(users))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function createUser(user){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return userApi.createUser(user)
        .then(savedUser => {
            dispatch(createUserSuccess(savedUser))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function updateUser(user){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return userApi.updateUser(user)
        .then(savedUser => {
            dispatch(updateUserSuccess(savedUser))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function deleteUser(user){
    return function(dispatch){
        dispatch(deleteUserOptimistic(user))
        return userApi.deleteUser(user)
    }
}

export function loadUsersSuccess(users){
    return {type: types.LOAD_USERS_SUCCESS, users: users}
}

export function createUserSuccess(user){
    return {type: types.CREATE_USER_SUCCESS, user: user}
}

export function updateUserSuccess(user){
    return {type: types.UPDATE_USER_SUCCESS, user: user}
}

export function deleteUserOptimistic(user){
    return {type: types.UPDATE_USER_SUCCESS, user: user}
}