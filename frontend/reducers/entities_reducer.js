import { combineReducers } from 'redux';

import videosReducer from './videos_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  videos: videosReducer,
  users: usersReducer,
});


export default entitiesReducer;