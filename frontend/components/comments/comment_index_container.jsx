import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index'
// import { fetchVideo } from '../../actions/video_actions';


const mSTP = (session, state) => ({
    comments: Object.values(state.entities.comments),
    userId: session.id
})

const mDTP = dispatch => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    // fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
})


export default connect(mSTP, mDTP)(CommentIndex);