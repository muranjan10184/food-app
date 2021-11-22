import * as types from "../actions/types";
import initialState from "./initialState";

export default function foodReducer(state = initialState.food, action) {
  switch (action.type) {
    case types.LOAD_FOOD_SUCCESS:
      return action.food.data;
    default:
      return state;
  }
}
