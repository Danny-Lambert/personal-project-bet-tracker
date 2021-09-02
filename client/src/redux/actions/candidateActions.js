import * as types from './actionTypes.js';
import * as candidateApi from '../../api/candidateApi.js'
import {beginApiCall, apiCallError} from './apiStatusActions.js'
import {loadEmployees} from './employeeActions.js';
import {loadAssignments} from './assignmentActions.js';

export function loadCandidates(){
    return function(dispatch){
        dispatch(beginApiCall());
        return candidateApi.getCandidates()
        .then(candidates => {
            dispatch(loadCandidatesSuccess(candidates))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function createCandidate(candidate){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return candidateApi.createCandidate(candidate)
        .then(savedCandidate => {
            dispatch(createCandidateSuccess(savedCandidate))
            dispatch(loadEmployees())
            dispatch(loadAssignments())
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function updateCandidate(candidate){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return candidateApi.updateCandidate(candidate)
        .then(savedCandidate => {
            dispatch(updateCandidateSuccess(savedCandidate))
            dispatch(loadEmployees())
            dispatch(loadAssignments())
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function deleteCandidate(candidate){
    return function(dispatch){
        dispatch(deleteCandidateOptimistic(candidate))
        return candidateApi.deleteCandidate(candidate)
    }
}

export function loadCandidatesSuccess(candidates){
    return {type: types.LOAD_CANDIDATES_SUCCESS, candidates: candidates}
}

export function createCandidateSuccess(candidate){
    return {type: types.CREATE_CANDIDATE_SUCCESS, candidate: candidate}
}

export function updateCandidateSuccess(candidate){
    return {type: types.UPDATE_CANDIDATE_SUCCESS, candidate: candidate}
}

export function deleteCandidateOptimistic(candidate){
    return {type: types.UPDATE_CANDIDATE_SUCCESS, candidate: candidate}
}