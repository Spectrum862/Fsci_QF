import axios from 'axios';
import { createMessage } from './messages';

import { GET_STUDENTS, DELETE_STUDENT, ADD_STUDENT, GET_ERRORS } from './types';

// GET STUDENTS
export const getStudents = () => dispatch => {
    axios.get('/api/students/')
        .then(res => {
            dispatch({
                type: GET_STUDENTS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

// ADD STUDENT
export const addStudent = student => dispatch => {
    axios.post('/api/students/', student)
        .then(res => {
            dispatch(createMessage({ addStudent: 'Student Added!' }));
            dispatch({
                type: ADD_STUDENT,
                payload: res.data
            });
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};

// DELETE STUDENTS
export const deleteStudent = (studentID) => dispatch => {
    axios.delete(`/api/students/${studentID}/`)
        .then(res => {
            dispatch(createMessage({ deleteStudent: 'Student Deleted!' }));
            dispatch({
                type: DELETE_STUDENT,
                payload: studentID
            });
        }).catch(err => console.log(err));
};