import * as types from '../actions/actionTypes.js'
import initialState from './initialState.js'

export default function projectReducer(state = initialState.projects, action){
    switch(action.type){
        case types.LOAD_PROJECTS_SUCCESS:
            return action.projects
        case types.CREATE_PROJECT_SUCCESS:
            return [...state, action.project]
        case types.UPDATE_PROJECT_SUCCESS:
            return state.map(project => 
                project.project_id === action.project.project_id ? action.project : project
            )
        case types.DELETE_PROJECT_OPTIMISTIC:
            return state.filter(project => 
                project.project_id !== action.project.project_id 
            )
        default:
            return state;
    }
}