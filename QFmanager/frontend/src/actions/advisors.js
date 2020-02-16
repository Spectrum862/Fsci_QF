import axios from 'axios';
import { createMessage } from './messages';

import { GET_ADVISORS, DELETE_ADVISOR, ADD_ADVISOR, GET_ERRORS } from './types';

// GET ADVISORS
export const getAdvisors = () => dispatch => {
    axios.get('/api/advisors/')
        .then(res => {
            dispatch({
                type: GET_ADVISORS,
                payload: res.data
            })
        }).catch(err => console.log(err));
};

// ADD ADVISOR
export const addAdvisor = advisor => dispatch => {
    axios.post('/api/advisors/', advisor)
        .then(res => {
            dispatch(createMessage({ addAdvisor: 'Advisor Added!' }))
            dispatch({
                type: ADD_ADVISOR,
                payload: res.data
            })
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
};

// DELETE ADVISOR
export const deleteAdvisor = (AdvisorID) => dispatch => {
    axios.delete(`/api/advisors/${AdvisorID}/`)
        .then(res => {
            dispatch(createMessage({ deleteAdvisor: 'Advisor Deleted!' }))
            dispatch({
                type: DELETE_ADVISOR,
                payload: AdvisorID
            })
        }).catch(err => console.log(err));
};