import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index'
// import { fetchVideo } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom'


const mSTP = (state) => ({
    comments: state.entities.comments,
    // comments: Object.values(state.entities.comments),
    userId: state.session.id
})

const mDTP = dispatch => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    // fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
})


export default withRouter(connect(mSTP, mDTP)(CommentIndex));