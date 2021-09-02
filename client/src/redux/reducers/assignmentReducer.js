import * as types from '../actions/actionTypes.js';
import initialState from './initialState.js';

export default function assignmentReducer(state = initialState.assignments, action){
    switch(action.type){
        case types.CREATE_ASSIGNMENT_SUCCESS:
            return state.concat(action.assignment)
        case types.LOAD_ASSIGNMENTS_SUCCESS:
            return action.assignments
        case types.UPDATE_ASSIGNMENT_SUCCESS:
            return state.map(assignment => 
                assignment.assignment_id === action.assignment.assignment_id ? action.assignment : assignment
            )
        case types.DELETE_ASSIGNMENT_OPTIMISTIC:
            return state.filter(assignment => 
                assignment.assignment_id !== action.assignment.assignment_id 
            )   
        default:
            return state;
    }
}