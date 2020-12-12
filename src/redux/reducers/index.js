import testPageReducer from "./testPageReducer";
import homePageReducer from "./homePageReducer";
import { combineReducers } from "redux";
import userReducer from "./userReducer";

const pageReducers = combineReducers({
    test: testPageReducer,
    home: homePageReducer,
})

const rootReducer = combineReducers({
    pages: pageReducers, 
    users: userReducer
});


export default rootReducer;