import { GET_STUDENT } from '../actions/types.js';

const initialState = {
    student: []
};

export default function(state = initialState, action){
    switch (action.type) {
        case GET_STUDENT:
            return {
                ...state,
                student: action.payload
            }
        default:
            return state;
    }
}