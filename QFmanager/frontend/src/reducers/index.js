import { combineReducers } from 'redux';
import students from './students';
import advisors from './advisors';
import officers from './officers';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    students,
    advisors,
    officers,
    errors,
    messages
});