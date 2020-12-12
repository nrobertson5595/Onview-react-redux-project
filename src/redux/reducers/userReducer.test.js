import reducer from "./userReducer";
import * as types from "../actions/userDataActions";
import getSampleUserData from "../../services/sampleUserData";
import getSamplePostData from "../../services/samplePostData";

describe("user reducer", () => {
  it("should return intial state", () => {
    expect(reducer(undefined, {})).toEqual({
      users: [],
      selected_user_posts: [],
    });
  });
});

it("should handle SET_USERS", () => {
  const getUser = {
    type: types.SET_USERS,
    user: getSampleUserData.user,
  };
  expect(reducer({}, getUser)).toEqual({
    user: getSampleUserData.user,
  });
});

it("should handle SET_POSTS_FOR_USER", () => {
  const getPost = {
    type: types.SET_POSTS_FOR_USER,
    selected_user_posts: getSamplePostData,
  };
  expect(reducer({}, getPost)).toEqual({
    selected_user_posts: getSamplePostData.user,
  });
});
