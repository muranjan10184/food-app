import * as types from "../actions/types";
import initialState from "./initialState";

export default function checkoutReducer(
  state = initialState.checkoutList,
  action
) {
  console.log(action);
  switch (action.type) {
    case types.CHECKOUT_FOOD:
      return [...state, action.food];
    case types.INCREASE_QUANTITY:
      return [...state, { quantity: action.quantity }];
    default:
      return state;
  }
}
