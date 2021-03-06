import { connect } from "react-redux";
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    user: state.entities.users[state.session.id],
    comments: Object.values(state.entities.comments)
})

const mDTP = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment))
})


export default withRouter(connect(mSTP, mDTP)(CommentForm));