import * as types from './actionTypes.js';
import * as clientApi from '../../api/clientApi.js';
import {beginApiCall, apiCallError} from './apiStatusActions.js';

export function loadClients(){
    return function(dispatch){
        dispatch(beginApiCall());
        return clientApi.getClients()
        .then(clients => {
            dispatch(loadClientsSuccess(clients));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function createClient(client){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return clientApi.createClient(client)
        .then(savedClient => {
            dispatch(createClientSuccess(savedClient))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function updateClient(client){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return clientApi.updateClient(client)
        .then(savedClient => {
            dispatch(updateClientSuccess(savedClient))
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function deleteClient(client){
    return function(dispatch){
        dispatch(deleteClientOptimistic(client))
        return clientApi.deleteClient(client)
    }
}

export function loadClientsSuccess(clients){
    return {type: types.LOAD_CLIENTS_SUCCESS, clients: clients}
}

export function createClientSuccess(client){
    return {type: types.CREATE_CLIENT_SUCCESS, client: client}
}

export function updateClientSuccess(client){
    return {type: types.UPDATE_CLIENT_SUCCESS, client: client}
}

export function deleteClientOptimistic(client){
    return {type: types.UPDATE_CLIENT_SUCCESS, client: client}
}