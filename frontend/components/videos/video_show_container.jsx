import React from "react";
import VideoShow from './video_show';
import { fetchVideo, fetchVideos } from "../../util/video_api_util";
import { fetchUsers } from "../../util/user_api_util";
import { connect } from "react-redux";

const mSTP = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    videos: Object.keys(state.entities.videos).map(key => state.entities.videos[key]),
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mSTP, mDTP)(VideoShow);