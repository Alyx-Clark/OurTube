import { combineReducers } from 'redux';

import videosReducer from './videos_reducer';
import usersReducer from './users_reducer';
import commentsReducer from './comments_reducer'
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers({
  videos: videosReducer,
  users: usersReducer,
  comments: commentsReducer,
  likes: likesReducer
});


export default entitiesReducer;