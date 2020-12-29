import { UPDATE_CART } from "./Types";

interface ICategoriesState {
  cart: any;
}

const initialState = {
  cart: localStorage.getItem("userCart")
    ? JSON.parse(localStorage.getItem("userCart") || "")
    : [],
};

interface ICategoriesReducerAction {
  type: typeof UPDATE_CART;
  cart?: any[];
}

export default function reducer(
  state: ICategoriesState = initialState,
  { type, cart }: ICategoriesReducerAction
): ICategoriesState {
  switch (type) {
    case UPDATE_CART:
      return {
        ...state,
        cart,
      };
    default:
      return { ...state };
  }
}
