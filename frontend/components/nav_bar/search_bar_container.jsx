import React from 'react';
import {connect} from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from "react-router-dom";
import SearchBar from './search_bar';


const mSTP = state => ({
    videos: Object.keys(state.entities.videos).map(key => state.entities.videos[key]),
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUsers: () => dispatch(fetchUsers())
})



export default withRouter(connect(mSTP, mDTP)(SearchBar));