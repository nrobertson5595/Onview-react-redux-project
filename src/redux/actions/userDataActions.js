export const setUsersAction = value => dispatch => {
    dispatch({ type: 'SET_USERS', payload: value})
}

export const setUserPostsAction = value => dispatch => {
    dispatch({ type: 'SET_POSTS_FOR_USER', payload: value})
}


