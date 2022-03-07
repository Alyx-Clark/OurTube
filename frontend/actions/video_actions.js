import * as VideoAPIUtil from '../util/video_api_util'

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';

const removeVideo = (videoId) => {
    return {
        type: REMOVE_VIDEO,
        videoId
    }
}

const receiveVideo = (video) => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
}

const receiveAllVideos = (videos) => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos
    }
}

export const fetchVideos = () => dispatch => (
    VideoAPIUtil.fetchVideos().then(videos => dispatch(receiveAllVideos(videos)))
)

export const fetchVideo = videoId => dispatch => (
    VideoAPIUtil.fetchVideo(videoId).then((video) => {
        // console.log(video)
        // console.log("hellllllllllllllllllllllllllllllo")
        return dispatch(receiveVideo(video))
    }
)
)

export const deleteVideo = videoId => dispatch => (
    VideoAPIUtil.deleteVideo(videoId).then(videoId => dispatch(removeVideo(videoId)))
)



