import axios from "axios";
import {
  INITIALIZE_PAYMENT_FAIL,
  INITIALIZE_PAYMENT_REQUEST,
  INITIALIZE_PAYMENT_SUCCESS,
} from "../constants/paymentConstants";

export const initializePayment =
  (full_name, email, amount) => async (dispatch, getState) => {
    dispatch({ type: INITIALIZE_PAYMENT_REQUEST });
    try {
      const token = getState()?.signInInfo?.userInfo?.token;
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/payment/init",
        { full_name, email, amount },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: INITIALIZE_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: INITIALIZE_PAYMENT_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.message,
      });
    }
  };
