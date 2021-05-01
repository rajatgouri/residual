import { GET_ALL_POST, GET_POST, ADD_POST, GET_COMMENT } from "../Types";

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case GET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    default:
      return state;
  }
};
