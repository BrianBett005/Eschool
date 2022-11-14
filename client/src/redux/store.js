import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { createEventReducer, getMyEventsReducer } from "./reducers/eventReducers";
import { initializePaymentReducer } from "./reducers/paymentReducers";
import { updateSchoolReducer } from "./reducers/schoolReducers";
// import { getAllSchoolsReducer } from "./reducers/schoolReducers";
import { userSigninReducer, userSignUpReducer } from "./reducers/userReducers";

const reducers = combineReducers({
  signInInfo: userSigninReducer,
  signup: userSignUpReducer,
  updateSchool: updateSchoolReducer,
  events:getMyEventsReducer,
  event:createEventReducer,payment:initializePaymentReducer
  
});
const initialState = {
  signInInfo: {
    userInfo: localStorage.getItem("eSchooluserDetails")
      ? JSON.parse(localStorage.getItem("eSchooluserDetails"))
      : null,
  },
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
