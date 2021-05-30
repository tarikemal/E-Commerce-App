import { ActionTypes } from "../action-types";

const initState = {
  cartItems: [],
  cartItemsAmount: 0,
  totalCost: 0,
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART_PRODUCTS:
      const { productId, products } = payload;
      const [addedPhone] = products.filter((phone) => phone.id === productId);

      if (state.cartItems.includes(addedPhone)) return { ...state };
      return {
        ...state,
        cartItems: [...state.cartItems, addedPhone],
        cartItemsAmount: state.cartItemsAmount + 1,
        totalCost: state.totalCost + addedPhone.price,
      };

    case ActionTypes.DELETE_CART_ITEM:
      const { itemId } = payload;
      const [removedItem] = state.cartItems.filter(
        (item) => item.id === itemId
      );
      const newCartItems = state.cartItems.filter((item) => item.id !== itemId);
      return {
        ...state,
        cartItems: newCartItems,
        totalCost: state.totalCost - removedItem.price,
        cartItemsAmount: state.cartItemsAmount - 1,
      };

    case ActionTypes.CHANGE_TOTAL_COST:
      const { id, code } = payload;
      const [changedItem] = state.cartItems.filter((item) => item.id === id);
      console.log(changedItem);
      const itemPrice = changedItem.price;
      if (code === "inc") {
        return { ...state, totalCost: state.totalCost + itemPrice };
      } else if (code === "dec") {
        return { ...state, totalCost: state.totalCost - itemPrice };
      }

    default:
      return { ...state };
  }
};
