import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from "../actions/video_actions";

const videosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
//    console.log("hi")
//    console.log(action.type)
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            // console.log("videosreducerreceive")
            // const video = Object.assign({}, action.video)
            // delete video.comments
            // return Object.assign({}, oldState, { [action.video.id]: video });
            nextState[action.video.id] = action.video;
            return nextState;
        case REMOVE_VIDEO:
            delete nextState[action.videoId];
            return nextState;
        default:
            return oldState;
    }
};

export default videosReducer;