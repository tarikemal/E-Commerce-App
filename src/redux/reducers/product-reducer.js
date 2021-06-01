import { ActionTypes } from "../action-types";
import { phones } from "../../data";

const initState = {
  products: phones,
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DISPLAYED_PRODUCTS_BY_BRAND:
      if (payload.isChecked) {
        let newProducts = phones.filter(
          (phone) => payload.brand.toLowerCase() === phone.brand.toLowerCase()
        );

        if (state.products.length === phones.length) {
          return { ...state, products: newProducts };
        }

        const tmp = [...state.products, ...newProducts];
        newProducts = phones.filter((product) => tmp.includes(product));

        return { ...state, products: newProducts };
      } else {
        const displayedPhones = state.products;
        const newProducts = displayedPhones.filter(
          (phone) => phone.brand.toLowerCase() !== payload.brand.toLowerCase()
        );

        if (newProducts.length === 0) {
          return { ...state, products: phones };
        }
        return { ...state, products: newProducts };
      }

    case ActionTypes.SET_DISPLAYED_PRODUCTS_BY_PRICE:
      const { checkBoxIndex } = payload;
      if (checkBoxIndex === 0) {
        let newProducts = state.products.slice(0);
        newProducts = newProducts.sort((a, b) => a.price - b.price);
        return { ...state, products: newProducts };
      } else {
        let newProducts = state.products.slice(0);
        newProducts = newProducts.sort((a, b) => b.price - a.price);
        return { ...state, products: newProducts };
      }

    case ActionTypes.REMOVE_PRICE_FILTER:
      const newProducts = phones.filter((product) =>
        state.products.includes(product)
      );
      return { ...state, products: newProducts };
    default:
      return { ...state };
  }
};
