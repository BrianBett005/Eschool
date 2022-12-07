import axios from "axios";
import {
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  GET_BLOG_COMMENTS_FAIL,
  GET_BLOG_COMMENTS_REQUEST,
  GET_BLOG_COMMENTS_SUCCESS,
} from "../constants/commentConstants";

export const createComment = (comment) => async (dispatch, getState) => {
  dispatch({ type: CREATE_COMMENT_REQUEST });
  try {
    const { data } = await axios.post(
      "https://edet-school.herokuapp.com/api/v1/comments",
      comment
    );
    dispatch({ type: CREATE_COMMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_COMMENT_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const getBlogComments = (postId) => async (dispatch) => {
  dispatch({ type: GET_BLOG_COMMENTS_REQUEST });
  try {
    const { data } = await axios.get(
      `https://edet-school.herokuapp.com/api/v1/comments/${postId}`
    );
    dispatch({ type: GET_BLOG_COMMENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_BLOG_COMMENTS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
