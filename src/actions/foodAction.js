import * as types from "./types";
import * as foodApi from "./../services/foodApi";

export function loadFoodSuccess(food) {
  return { type: types.LOAD_FOOD_SUCCESS, food };
}

export function loadFood() {
  return function (dispatch) {
    return foodApi
      .getFood()
      .then((food) => {
        dispatch(loadFoodSuccess(food.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
