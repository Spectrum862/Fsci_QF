import { combineReducers } from 'redux';
import students from './students';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    students,
    errors,
    messages
});