import axios from "axios";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post(
      "https://edet-school.herokuapp.com/api/v1/schools/login",
      {
        email,
        password,
      }
    );
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("eSchooluserDetails", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const signup =
  (password, email, phone, school_name) => async (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
      payload: {
        email,
        phone,
        school_name,

        password,
      },
    });
    try {
      const { data } = await axios.post(
        "https://edet-school.herokuapp.com/api/v1/schools/register",
        {
          email,
          phone,
          school_name,
          password,
        }
      );
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
      localStorage.setItem("eSchooluserDetails", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.message,
      });
    }
  };

export const signout = () => async (dispatch) => {
  await axios.post("https://edet-school.herokuapp.com/api/v1/admin/logout");
  localStorage.removeItem("eSchooluserDetails");

  dispatch({ type: USER_SIGNOUT });
};
