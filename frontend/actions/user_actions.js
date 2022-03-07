import * as UserAPIUtil from '../util/user_api_util'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}


export const fetchUsers = () => dispatch => {
    // console.log("usersactionsssss")
    return UserAPIUtil.fetchUsers().then((users) => {
        // console.log(users)
        // console.log("usersactionss")
        return dispatch(receiveAllUsers(users))
        }
    )
}