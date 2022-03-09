import {RECEIVE_COMMENT, DELETE_COMMENT } from "../actions/comment_action";
import {RECEIVE_VIDEO} from "../actions/video_actions";

const commentsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    // console.log("hi")
    let nextState = [...oldState]
    // console.log("hel")
    switch (action.type) {
        case RECEIVE_VIDEO:
            return action.video.comments
        case RECEIVE_COMMENT:
            nextState.unshift(action.comment)
            return nextState
        case DELETE_COMMENT:
            return nextState.filter(comment => comment.id != action.commentId);
        default:
            return oldState;
    }
}

export default commentsReducer;