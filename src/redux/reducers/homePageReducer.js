const initialState = {
    ui: {},
}

const homePageReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SOME_VALUE':
            return { 
                ...state,
                value: action.payload
            }
            default: return state;
    }
}

export default homePageReducer;