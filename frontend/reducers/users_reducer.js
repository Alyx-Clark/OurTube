import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const usersReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        return Object.assign({}, oldstate, { [action.currentUser.id]: action.currentUser });
      case RECEIVE_ALL_USERS:
        return action.users;
      default:
        return oldstate;
    }
};
  
export default usersReducer;