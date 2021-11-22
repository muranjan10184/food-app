import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import foodReducer from "./foodReducer";
import checkoutReducer from "./checkoutReducer";

export default combineReducers({
  auth,
  message,
  foodReducer,
  checkoutReducer,
});
