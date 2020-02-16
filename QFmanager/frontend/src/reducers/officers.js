import { GET_OFFICERS, DELETE_OFFICER, ADD_OFFICER } from '../actions/types.js';

const initialState = {
    officers: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_OFFICERS:
            return {
                ...state,
                officers: action.payload
            }
        case ADD_OFFICER:
            return {
                ...state,
                officers: [...state.officers, action.payload]
            }
        case DELETE_OFFICER:
            return {
                ...state,
                officers: state.officers.filter(officer => officer.officerID !== action.payload)
            }
        default:
            return state;
    }
}