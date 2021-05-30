import { combineReducers } from "redux";
import { productReducer } from "./product-reducer";
import { cartReducer } from "./cart-reducer";

export const reducers = combineReducers({
  displayedProducts: productReducer,
  cart: cartReducer,
});
