import { combineReducers } from "redux";
import categories from "./Categories/Reducer";
import products from "./Products/Reducer";
import networkActivity from "./NetworkActivity/Reducer";
import cart from "./Cart/Reducer";
import orders from "./Order/Reducer";
import wishList from "./WishList/Reducer";

const appReducer = combineReducers({
  categories,
  products,
  networkActivity,
  cart,
  orders,
  wishList,
});

const rootReducer = (state: any, action: any) => appReducer(state, action);

export default rootReducer;
