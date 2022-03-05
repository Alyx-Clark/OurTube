import React from 'react';
import {connect} from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actions';
import VideoIndex from './video_index';


const mSTP = state => ({
    videos: Object.keys(state.entities.videos).map(key => state.entities.videos[key]),
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUsers: () => dispatch(fetchUsers())
})



export default connect(mSTP, mDTP)(VideoIndex);
