import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index'


const mSTP = (session, state) => ({
    comments: state.entities.comments,
    userId: session.id
})

const mDTP = dispatch => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
})


export default connect(mSTP, mDTP)(CommentIndex);