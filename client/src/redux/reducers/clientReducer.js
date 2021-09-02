import * as types from '../actions/actionTypes.js';
import initialState from './initialState.js';

export default function clientReducer(state = initialState.clients, action){
    switch(action.type){
        case types.CREATE_CLIENT_SUCCESS:
            return state.concat([action.client])
        case types.LOAD_CLIENTS_SUCCESS:
            return action.clients    
        case types.UPDATE_CLIENT_SUCCESS:
            return state.map(client => 
                client.id === action.client.id ? action.client : client
            )
        case types.DELETE_CLIENT_OPTIMISTIC:
            return state.filter(client => 
                client.id !== action.client.id 
            )
        default:
            return state;
    }
}