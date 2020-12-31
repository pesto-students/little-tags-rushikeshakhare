import createSagaMiddleWare from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { rootSaga } from "./rootSaga";
import { connect } from "react-redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const appState = {};
const sagaMiddleWare = createSagaMiddleWare();

let middlewares: any = [];

if (process.env.NODE_ENV === "development") {
  middlewares = [sagaMiddleWare, logger];
} else {
  middlewares = [sagaMiddleWare];
}

const store = createStore(
  rootReducer,
  appState,
  applyMiddleware(...middlewares)
);

sagaMiddleWare.run(rootSaga);

export const dispatch = store.dispatch;

const resolveMapStateToProps = (mapFn: any) => {
  return (state: any) => {
    const defaultMappedState = {
      networkActivity: state.networkActivity,
      productList: state.products.products,
      cart: state.cart.cart,
      orders: state.orders.orders
    };
    return { ...defaultMappedState, ...(mapFn && mapFn(state)) };
  };
};

const customConnect = (mapStateToProps?: any, mapDispatchToProps?: any) =>
  connect(resolveMapStateToProps(mapStateToProps), mapDispatchToProps);

export { customConnect as connect };
export default store;
