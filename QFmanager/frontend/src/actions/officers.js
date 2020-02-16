import axios from 'axios';
import { createMessage } from './messages';

import { GET_OFFICERS, DELETE_OFFICER, ADD_OFFICER, GET_ERRORS } from './types';

// GET OFFICERS
export const getOfficers = () => dispatch => {
    axios.get('/api/officers/')
        .then(res => {
            dispatch({
                type: GET_OFFICERS,
                payload: res.data
            });
        }).catch(err => console.log(err));
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
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
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