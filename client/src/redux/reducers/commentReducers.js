import {
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  GET_BLOG_COMMENTS_FAIL,
  GET_BLOG_COMMENTS_REQUEST,
  GET_BLOG_COMMENTS_SUCCESS,
} from "../constants/commentConstants";

export const createCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
      return { ...state, loading: true };
    case CREATE_COMMENT_SUCCESS:
      return { ...state, loading: false, comment: action.payload };
    case CREATE_COMMENT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getCommentsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BLOG_COMMENTS_REQUEST:
      return { ...state, loading: true };
    case GET_BLOG_COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: action.payload };
    case GET_BLOG_COMMENTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
