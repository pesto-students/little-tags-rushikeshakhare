import { call, put } from "redux-saga/effects";
import { productsService, productDetailService } from "./Service";
import {
  fetchProductsError,
  fetchProductsSuccess,
  fetchProductDetailsSuccess,
  fetchProductDetailsError,
} from "./Actions";

export function* handleProductsFetch(): any {
  try {
    const response = yield call(productsService);
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    yield put(fetchProductsError(error));
  }
}

export function* handleProductDetailsFetch(payload: any): any {
  try {
    const response = yield call(productDetailService, payload);
    yield put(fetchProductDetailsSuccess(response.data));
  } catch (error) {
    yield put(fetchProductDetailsError(error));
  }
}
