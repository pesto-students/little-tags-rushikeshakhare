import { UPDATE_ORDER } from "./Types";
import { StorageManager } from "../../utilities";
import { USER_ORDERS_STORAGE_KEY } from "../../AppConfig";

interface ICategoriesState {
  orders: any;
}

const initialState = {
  orders: StorageManager.get(USER_ORDERS_STORAGE_KEY) || [],
};

interface ICategoriesReducerAction {
  type: typeof UPDATE_ORDER;
  orders?: any[];
}

export default function reducer(
  state: ICategoriesState = initialState,
  { type, orders }: ICategoriesReducerAction
): ICategoriesState {
  switch (type) {
    case UPDATE_ORDER:
      return {
        ...state,
        orders,
      };
    default:
      return { ...state };
  }
}
