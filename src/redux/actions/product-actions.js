import { ActionTypes } from "../action-types";

export const setDisplayedProductsByBrand = (brand, isChecked) => {
  return {
    type: ActionTypes.SET_DISPLAYED_PRODUCTS_BY_BRAND,
    payload: {
      brand,
      isChecked,
    },
  };
};

export const setDisplayedProductsByPrice = (checkBoxIndex) => {
  return {
    type: ActionTypes.SET_DISPLAYED_PRODUCTS_BY_PRICE,
    payload: {
      checkBoxIndex,
    },
  };
};

export const removePriceFilter = () => {
  return {
    type: ActionTypes.REMOVE_PRICE_FILTER,
    payload: {},
  };
};
