import { UPDATE_CART } from "./Types";
import { StorageManager } from "../../utilities";
import { USER_CART_STORAGE_KEY } from "../../AppConfig";

interface ICategoriesState {
  cart: any;
}

const initialState = {
  cart: StorageManager.get(USER_CART_STORAGE_KEY) || [],
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
