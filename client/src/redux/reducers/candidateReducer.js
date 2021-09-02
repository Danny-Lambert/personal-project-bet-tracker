import * as types from '../actions/actionTypes.js';
import initialState from './initialState.js';

export default function assignmentReducer(state = initialState.assignments, action){
    switch(action.type){
        case types.CREATE_CANDIDATE_SUCCESS:
            return state.concat(action.candidate)
        case types.LOAD_CANDIDATES_SUCCESS:
            return action.candidates
        case types.UPDATE_CANDIDATE_SUCCESS:
            return state.map(candidate => 
                candidate.candidate_id === action.candidate.candidate_id ? action.candidate : candidate
            )
        case types.DELETE_CANDIDATE_OPTIMISTIC:
            return state.filter(candidate => 
                candidate.candidate_id !== action.candidate.candidate_id 
            )   
        default:
            return state;
    }
}