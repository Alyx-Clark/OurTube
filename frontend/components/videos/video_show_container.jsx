import React from "react";
import VideoShow from './video_show';
import { fetchVideo, fetchVideos } from "../../actions/video_actions";
import { fetchUsers } from "../../actions/user_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createLike, deleteLike, getLikes } from '../../actions/like_actions';

const mSTP = ({entities, session}, ownProps) => ({
    video: entities.videos[ownProps.match.params.videoId],
    videos: Object.keys(entities.videos).map(key => entities.videos[key]),
    users: entities.users,
    user: entities.users[session.id],
    userId: session.id
})

const mDTP = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUsers: () => dispatch(fetchUsers()),
    createLike: (like, userId) => dispatch(createLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like)),
    getLikes: () => dispatch(getLikes())
})


export default withRouter(connect(mSTP, mDTP)(VideoShow));