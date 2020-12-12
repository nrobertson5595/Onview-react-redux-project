const homePageActions = dispatch => value => {
    dispatch({ type: 'SOME_VALUE', payload: value})
}

export default homePageActions;