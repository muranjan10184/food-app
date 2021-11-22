import { loadFoodSuccess } from "../actions/foodAction";
import axios from "axios";
const foodMockURL =
  "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";
export async function getFood() {
  return await axios.get(foodMockURL).then(handleResponse).catch(handleError);
}

export function loadFoods() {
  return function (dispatch) {
    return getFood()
      .then((food) => {
        dispatch(loadFoodSuccess(food));
      })
      .catch((error) => {
        throw error;
      });
  };
}

async function handleResponse(response) {
  console.log(response);
  if (response.status === 200) return response;
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok");
}

function handleError(error) {
  throw error;
}
