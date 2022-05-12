import {RECEIVE_LIKE, DELETE_LIKE, RECEIVE_LIKES } from "../actions/like_actions";
import { RECEIVE_VIDEO } from "../actions/video_actions";

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    //let nextState = [...oldState]
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_VIDEO:
            return action.video.likes
        case RECEIVE_LIKES:
            return action.likes
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like
            //nextState.unshift(action.like);
            return nextState
        case DELETE_LIKE:
            delete nextState[action.likeId]
            //return nextState.filter(like => like.id != action.likeId);
            return nextState
        default:
            return oldState;

    }
};

export default likesReducer;
