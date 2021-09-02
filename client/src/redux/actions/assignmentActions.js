import * as types from './actionTypes.js';
import * as assignmentApi from '../../api/assignmentApi.js'
import {beginApiCall, apiCallError} from './apiStatusActions.js'

export function loadAssignments(){
    return function(dispatch){
        dispatch(beginApiCall());
        return assignmentApi.getAssignments()
        .then(assignments => {
            dispatch(loadAssignmentsSuccess(assignments))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function createAssignment(assignment){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return assignmentApi.createAssignment(assignment)
        .then(savedAssignment => {
            dispatch(createAssignmentSuccess(savedAssignment))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function updateAssignment(assignment){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return assignmentApi.updateAssignment(assignment)
        .then(savedAssignment => {
            dispatch(updateAssignmentSuccess(savedAssignment))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function deleteAssignment(assignment){
    return function(dispatch){
        dispatch(deleteAssignmentOptimistic(assignment))
        return assignmentApi.deleteAssignment(assignment)
    }
}

export function loadAssignmentsSuccess(assignments){
    return {type: types.LOAD_ASSIGNMENTS_SUCCESS, assignments: assignments}
}

export function createAssignmentSuccess(assignment){
    return {type: types.CREATE_ASSIGNMENT_SUCCESS, assignment: assignment}
}

export function updateAssignmentSuccess(assignment){
    return {type: types.UPDATE_ASSIGNMENT_SUCCESS, assignment: assignment}
}

export function deleteAssignmentOptimistic(assignment){
    return {type: types.UPDATE_ASSIGNMENT_SUCCESS, assignment: assignment}
}