import {combineReducers} from 'redux';
import clientReducer from './clientReducer.js';
import projectReducer from './projectReducer.js';
import userReducer from './userReducer.js';
import employeeReducer from './employeeReducer.js';
import apiStatusReducer from './apiStatusReducer.js';
import assignmentReducer from './assignmentReducer.js';
import candidateReducer from './candidateReducer.js';
import commentReducer from './commentReducer.js';
import notificationReducer from './notificationReducer.js';

const rootReducer = combineReducers({
    clients: clientReducer,
    apiCallsInProgress: apiStatusReducer,
    projects: projectReducer,
    users: userReducer,
    employees: employeeReducer,
    assignments : assignmentReducer,
    candidates : candidateReducer,
    comments : commentReducer,
    notifications: notificationReducer
});

export default rootReducer;