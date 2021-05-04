import {
  GET_ALL_POST,
  GET_POST,
  ADD_POST,
  GET_COMMENT,
  GET_USER,
  GET_CATEGORIES,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        users: action.payload,
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
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};