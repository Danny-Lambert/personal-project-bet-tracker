import * as types from '../actions/actionTypes.js'
import initialState from './initialState.js'

export default function employeeReducer(state = initialState.employees, action){
    switch(action.type){
        case types.LOAD_EMPLOYEES_SUCCESS:
            return action.employees
        case types.CREATE_EMPLOYEE_SUCCESS:
            return [...state, action.employee]
        case types.UPDATE_EMPLOYEE_SUCCESS:
            return state.map(employee => 
                employee.employee_id === action.employee.employee_id ? action.employee : employee
            )
        case types.DELETE_EMPLOYEE_OPTIMISTIC:
            return state.filter(employee => 
                employee.employee_id !== action.employee.employee_id 
            )
        default:
            return state;
    }
}