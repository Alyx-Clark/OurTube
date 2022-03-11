import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index'
import { withRouter } from 'react-router-dom'


const mSTP = (state) => ({
    comments: state.entities.comments,
    userId: state.session.id
})

const mDTP = dispatch => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
})


export default withRouter(connect(mSTP, mDTP)(CommentIndex));