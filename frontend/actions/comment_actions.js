import * as CommentAPIUtil from '../util/comment_api_util';

export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
// export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

// export const receiveAllComments = comments => ({
//     type: RECEIVE_ALL_COMMENTS,
//     comments
// })

export const removeComment = commentId => ({
    type: DELETE_COMMENT,
    commentId
})

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
)

// export const fetchComments = videoId => dispatch => (
//     CommentAPIUtil.fetchComments(videoId).then(comments => dispatch(receiveAllComments(comments)))
// )

export const deleteComment = commentId => dispatch => (
    CommentAPIUtil.deleteComment(commentId).then(commentId => dispatch(removeComment(commentId)))
)