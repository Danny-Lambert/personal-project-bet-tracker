import * as types from '../actions/actionTypes.js'
import initialState from './initialState.js'

export default function userReducer(state = initialState.users, action){
    switch(action.type){
        case types.LOAD_USERS_SUCCESS:
            return action.users
        case types.CREATE_USER_SUCCESS:
            return [...state, action.user]
        case types.UPDATE_USER_SUCCESS:
            return state.map(user => 
                user.user_id === action.user.user_id ? action.user : user
            )
        case types.DELETE_USER_OPTIMISTIC:
            return state.filter(user => 
                user.user_id !== action.user.user_id 
            )
        default:
            return state;
    }
}

