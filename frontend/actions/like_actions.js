import * as LikeAPIUtil from '../util/like_api_util';

export const DELETE_LIKE = "DELETE_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
})

export const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
})

export const removeLike = likeId => ({
    type: DELETE_LIKE,
    likeId
})

export const createLike = like => dispatch => (
    LikeAPIUtil.createLike(like).then(like => dispatch(receiveLike(like)))
)

export const deleteLike = likeId => dispatch => (
    LikeAPIUtil.deleteLike(likeId).then(likeId => dispatch(removeLike(likeId)))
)

export const getLikes = () => dispatch => (
    LikeAPIUtil.getAllLikes().then(likes => dispatch(receiveLikes(likes)))
)