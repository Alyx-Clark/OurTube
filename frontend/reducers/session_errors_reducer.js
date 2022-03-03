import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    REMOVE_ERRORS,
} from '../actions/session_actions';
// import { LOCATION_CHANGE } from 'connected-react-router';
  
const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case REMOVE_ERRORS:
        return [];
      case RECEIVE_SESSION_ERRORS:
        return action.errors;
      case RECEIVE_CURRENT_USER:
        return [];
      default:
        return state;
    }
};


export default sessionErrorsReducer;