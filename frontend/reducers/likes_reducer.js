import {RECEIVE_LIKE, DELETE_LIKE, RECEIVE_LIKES } from "../actions/like_actions";
import { RECEIVE_VIDEO } from "../actions/video_actions";

const likesReducer = (oldState = {} , action) => {
    Object.freeze(oldState);
    //let nextState = [...oldState]
    let emptyArr = [];
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_VIDEO:
            return action.video.likes
        case RECEIVE_LIKES:
            //return action.likes
            
            Object.keys(action.likes).map((id) => {
                emptyArr.push(action.likes[id]);
            })
            return emptyArr;
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like
            //nextState.unshift(action.like);
            Object.keys(nextState).map((id) => {
                emptyArr.push(nextState[id]);
            })
            return emptyArr;
        case DELETE_LIKE:
            console.log(action)
            console.log(nextState)
            //return nextState.filter(like => like.id != action.likeId);
            Object.keys(nextState).map((id) => {
                emptyArr.push(nextState[id]);
            })
            return emptyArr.filter(like => like.id != action.likeId);
        default:
            return oldState;

    }
};

export default likesReducer;
