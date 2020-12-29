import { all, takeEvery } from "redux-saga/effects";
import { FETCH_PRODUCTS, FETCH_PRODUCT_DETAILS } from "./Types";
import { handleProductsFetch, handleProductDetailsFetch } from "./Saga";

export default function categoriesWatcher() {
  return all([
    takeEvery(FETCH_PRODUCTS, handleProductsFetch),
    takeEvery(FETCH_PRODUCT_DETAILS, handleProductDetailsFetch),
  ]);
}
