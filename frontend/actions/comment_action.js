import * as CommentAPIUtil from '../util/comment_api_util';

export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const removeComment = commentId => ({
    type: DELETE_COMMENT,
    commentId
})

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
)

export const deleteComment = commentId => dispatch => (
    CommentAPIUtil.deleteComment(commentId).then(commentId => dispatch(removeComment(commentId)))
)