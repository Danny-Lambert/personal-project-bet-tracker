import * as types from './actionTypes.js';
import * as commentApi from '../../api/commentApi.js';
import {beginApiCall, apiCallError} from './apiStatusActions.js';
import {loadEmployees} from './employeeActions.js';
import {loadAssignments} from './assignmentActions.js';

export function loadClients(){
    return function(dispatch){
        dispatch(beginApiCall());
        return commentApi.getComments()
        .then(comments => {
            dispatch(loadCommentsSuccess(comments));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function createComment(comment){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return commentApi.createComment(comment)
        .then(savedComment => {
            dispatch(createCommentSuccess(savedComment))
            dispatch(loadAssignments())
            dispatch(loadEmployees())
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function updateComment(comment){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return commentApi.updateComment(comment)
        .then(savedComment => {
            dispatch(updateCommentSuccess(savedComment))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function deleteComment(comment){
    return function(dispatch){
        dispatch(deleteCommentOptimistic(comment))
        return commentApi.deleteComment(comment)
    }
}

export function loadCommentsSuccess(comments){
    return {type: types.LOAD_COMMENTS_SUCCESS, comments: comments}
}

export function createCommentSuccess(comment){
    return {type: types.CREATE_COMMENT_SUCCESS, comment: comment}
}

export function updateCommentSuccess(comment){
    return {type: types.UPDATE_COMMENT_SUCCESS, comment: comment}
}

export function deleteCommentOptimistic(comment){
    return {type: types.DELETE_COMMENT_OPTIMISTIC, comment: comment}
}