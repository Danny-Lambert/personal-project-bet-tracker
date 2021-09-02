import * as types from './actionTypes.js';
import * as notificationApi from '../../api/notificationApi.js'
import {beginApiCall, apiCallError} from './apiStatusActions.js'

export function loadNotifications(){
    return function(dispatch){
        dispatch(beginApiCall());
        return notificationApi.getNotifications()
        .then(notifications => {
            dispatch(loadNotificationsSuccess(notifications))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function createNotifications(notification){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return notificationApi.createNotification(notification)
        .then(savedNotification => {
            dispatch(createNotificationSuccess(savedNotification))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function updateNotification(notification){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return notificationApi.updateNotification(notification)
        .then(savedNotification => {
            dispatch(updateNotificationSuccess(savedNotification))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function deleteNotification(notification){
    return function(dispatch){
        dispatch(deleteNotificationOptimistic(notification))
        return notificationApi.deleteNotification(notification)
    }
}

export function loadNotificationsSuccess(notifications){
    return {type: types.LOAD_NOTIFICATIONS_SUCCESS, notifications: notifications}
}

export function createNotificationSuccess(notification){
    return {type: types.CREATE_NOTIFICATION_SUCCESS, notification: notification}
}

export function updateNotificationSuccess(notification){
    return {type: types.UPDATE_NOTIFICATION_SUCCESS, notification: notification}
}

export function deleteNotificationOptimistic(notification){
    return {type: types.UPDATE_NOTIFICATION_SUCCESS, notification: notification}
}