import * as types from './actionTypes.js';
import * as projectApi from '../../api/projectApi.js'
import {beginApiCall, apiCallError} from './apiStatusActions.js'

export function loadProjects(){
    return function(dispatch){
        dispatch(beginApiCall());
        return projectApi.getProjects()
        .then(projects => {
            dispatch(loadProjectsSuccess(projects))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function createProject(project){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return projectApi.createProject(project)
        .then(savedProject => {
            dispatch(createProjectSuccess(savedProject))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function updateProject(project){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return projectApi.updateProject(project)
        .then(savedProject => {
            dispatch(updateProjectSuccess(savedProject))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function deleteProject(project){
    return function(dispatch){
        dispatch(deleteProjectOptimistic(project))
        return projectApi.deleteProject(project)
    }
}

export function loadProjectsSuccess(projects){
    return {type: types.LOAD_PROJECTS_SUCCESS, projects: projects}
}

export function createProjectSuccess(project){
    return {type: types.CREATE_PROJECT_SUCCESS, project: project}
}

export function updateProjectSuccess(project){
    return {type: types.UPDATE_PROJECT_SUCCESS, project: project}
}

export function deleteProjectOptimistic(project){
    return {type: types.UPDATE_PROJECT_SUCCESS, project: project}
}