const initialState = {
  users: [],
  selected_user_posts: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_POSTS_FOR_USER":
      return {
        ...state,
        selected_user_posts: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
