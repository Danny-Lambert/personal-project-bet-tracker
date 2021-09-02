import * as types from '../actions/actionTypes.js';
import initialState from './initialState.js';

export default function notificationReducer(state = initialState.notifications, action){
    switch(action.type){
        case types.CREATE_NOTIFICATION_SUCCESS:
            return state.concat(action.notification)
        case types.LOAD_NOTIFICATIONS_SUCCESS:
            return action.notifications
        case types.UPDATE_NOTIFICATION_SUCCESS:
            return state.map(notification => 
                notification.notification_id === action.notification.notification_id ? action.notification : notification
            )
        case types.DELETE_NOTIFICATION_OPTIMISTIC:
            return state.filter(notification => 
                notification.notification_id !== action.notification.notification_id 
            )   
        default:
            return state;
    }
}