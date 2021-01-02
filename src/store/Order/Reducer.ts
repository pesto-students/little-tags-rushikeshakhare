import { UPDATE_ORDER } from "./Types";

interface ICategoriesState {
  orders: any;
}

const initialState = {
  orders: localStorage.getItem("userOrder")
    ? JSON.parse(localStorage.getItem("userOrder") || "")
    : [],
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
