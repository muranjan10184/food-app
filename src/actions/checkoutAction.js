import * as types from './types';

export default function checkoutFood(food){
    return {type: types.CHECKOUT_FOOD, food};
}

export  function increaseQuantity(quantity){
        return { type: types.INCREASE_QUANTITY, quantity };
}

export  function decreaseQuantity(quantity) {
  return { type: types.DECREASE_QUANTITY, quantity };
}