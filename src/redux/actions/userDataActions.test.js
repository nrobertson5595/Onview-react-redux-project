import * as types from "./userDataActions";
import getSampleUserData from "../../services/sampleUserData";
import getSamplePostData from "../../services/samplePostData";
import thunk from "redux-thunk";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("actions", () => {
  it("should dispatch an action to set user data", () => {
    const expectedActions = [
      { type: types.SET_USERS, payload: getSampleUserData },
    ];
    const store = mockStore({ users: [], selected_user_posts: [] });
    store.dispatch(types.setUsersAction());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

//{ type: types.SET_POSTS_FOR_USER, payload: getDataMock }
