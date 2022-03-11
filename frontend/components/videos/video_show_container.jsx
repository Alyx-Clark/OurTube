import React from "react";
import VideoShow from './video_show';
import { fetchVideo, fetchVideos } from "../../actions/video_actions";
import { fetchUsers } from "../../actions/user_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

const mSTP = ({entities, session}, ownProps) => ({
    video: entities.videos[ownProps.match.params.videoId],
    videos: Object.keys(entities.videos).map(key => entities.videos[key]),
    users: entities.users,
    user: entities.users[session.id],
    userId: session.id
})

// debugger 

const mDTP = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUsers: () => dispatch(fetchUsers())
})


export default withRouter(connect(mSTP, mDTP)(VideoShow));