import * as types from './actionTypes.js';
import * as employeeApi from '../../api/employeeApi.js'
import {beginApiCall, apiCallError} from './apiStatusActions.js'

export function loadEmployees(){
    return function(dispatch){
        dispatch(beginApiCall());
        return employeeApi.getEmployees()
        .then(employees => {
            dispatch(loadEmployeesSuccess(employees))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function createEmployee(employee){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return employeeApi.createEmployee(employee)
        .then(savedEmployee => {
            dispatch(createEmployeeSuccess(savedEmployee))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function updateEmployee(employee){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return employeeApi.updateEmployee(employee)
        .then(savedEmployee => {
            dispatch(updateEmployeeSuccess(savedEmployee))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function deleteEmployee(employee){
    return function(dispatch){
        dispatch(deleteEmployeeOptimistic(employee))
        return employeeApi.deleteEmployee(employee)
    }
}

export function loadEmployeesSuccess(employees){
    return {type: types.LOAD_EMPLOYEES_SUCCESS, employees: employees}
}

export function createEmployeeSuccess(employee){
    return {type: types.CREATE_EMPLOYEE_SUCCESS, employee: employee}
}

export function updateEmployeeSuccess(employee){
    return {type: types.UPDATE_EMPLOYEE_SUCCESS, employee: employee}
}

export function deleteEmployeeOptimistic(employee){
    return {type: types.DELETE_EMPLOYEE_OPTIMISTIC, employee: employee}
}