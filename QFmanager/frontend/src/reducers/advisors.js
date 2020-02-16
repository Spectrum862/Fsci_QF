import { GET_ADVISORS, DELETE_ADVISOR, ADD_ADVISOR } from '../actions/types.js';
import { Advisors } from '../components/advisors/Advisors.js';

const initialState = {
    advisors: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ADVISORS:
            return {
                ...state,
                advisors: action.payload
            }
        case ADD_ADVISOR:
            return {
                ...state,
                advisors: [...state.advisors, action.payload]
            }
        case DELETE_ADVISOR:
            return {
                ...state,
                advisors: state.advisors.filter(advisor => advisor.AdvisorID !== action.payload)
            }
        default:
            return state;
    }
}