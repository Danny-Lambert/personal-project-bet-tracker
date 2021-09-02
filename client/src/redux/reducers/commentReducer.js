import * as types from '../actions/actionTypes.js';
import initialState from './initialState.js';

export default function commentReducer(state = initialState.comments, action){
    switch(action.type){
        case types.CREATE_COMMENT_SUCCESS:
            return state.concat([action.comment])
        case types.LOAD_COMMENTS_SUCCESS:
            return action.comments    
        case types.UPDATE_COMMENT_SUCCESS:
            return state.map(comment => 
                comment.id === action.comment.id ? action.comment : comment
            )
        case types.DELETE_COMMENT_OPTIMISTIC:
            return state.filter(comment => 
                comment.id !== action.comment.id 
            )
        default:
            return state;
    }
}