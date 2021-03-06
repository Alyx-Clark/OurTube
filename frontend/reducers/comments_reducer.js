import {RECEIVE_COMMENT, DELETE_COMMENT } from "../actions/comment_actions";
import {RECEIVE_VIDEO} from "../actions/video_actions";

const commentsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = [...oldState]
    switch (action.type) {
        case RECEIVE_VIDEO:
            return action.video.comments.reverse()
        case RECEIVE_COMMENT:
            nextState.unshift(action.comment);
            return nextState;
        case DELETE_COMMENT:
            return nextState.filter(comment => comment.id != action.commentId);
        default:
            return oldState;
    }
}

export default commentsReducer;