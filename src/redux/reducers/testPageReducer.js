const initialState = {
    ui: {},
}

const testPageReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SOME_VALUE':
            return { 
                ...state,
                value: action.payload
            }
            default: return state;
    }
}

export default testPageReducer;