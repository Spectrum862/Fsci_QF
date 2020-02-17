import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import { GET_OFFICERS, DELETE_OFFICER, ADD_OFFICER } from './types';

// GET OFFICERS
export const getOfficers = () => dispatch => {
    axios.get('/api/officers/')
        .then(res => {
            dispatch({
                type: GET_OFFICERS,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// ADD OFFICER
export const addOfficer = officer => dispatch => {
    axios.post('/api/officers/', officer)
        .then(res => {
            dispatch(createMessage({ addOfficer: 'Officer Added!' }))
            dispatch({
                type: ADD_OFFICER,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// DELETE OFFICER
export const deleteOfficer = (officerID) => dispatch => {
    axios.delete(`/api/officers/${officerID}/`)
        .then(res => {
            dispatch(createMessage({ deleteOfficer: 'Officer Deleted!' }))
            dispatch({
                type: DELETE_OFFICER,
                payload: officerID
            });
        }).catch(err => console.log(err));
}