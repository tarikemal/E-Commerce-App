import { ActionTypes } from "../action-types";

export const setCartItems = (productId, products) => {
  return {
    type: ActionTypes.SET_CART_PRODUCTS,
    payload: {
      productId,
      products,
    },
  };
};

export const deleteCartItem = (itemId) => {
  return {
    type: ActionTypes.DELETE_CART_ITEM,
    payload: {
      itemId,
    },
  };
};

export const changeTotalCost = (id, code) => {
  return {
    type: ActionTypes.CHANGE_TOTAL_COST,
    payload: {
      id,
      code,
    },
  };
};
