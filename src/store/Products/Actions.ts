import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_ERROR,
} from "./Types";
import { ActionDispatcher } from "../ActionDispatcher/ActionDispatcher";

export function fetchProducts() {
  return ActionDispatcher.getInstance().dispatch({
    type: FETCH_PRODUCTS,
  });
}

export function fetchProductsSuccess(response: any) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    response,
  };
}

export function fetchProductsError(error: any) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error,
  };
}

export function fetchProductDetails(id: number) {
  return ActionDispatcher.getInstance().dispatch({
    type: FETCH_PRODUCT_DETAILS,
    id,
  });
}

export function fetchProductDetailsSuccess(response: any) {
  return {
    type: FETCH_PRODUCT_DETAILS_SUCCESS,
    response,
  };
}

export function fetchProductDetailsError(error: any) {
  return {
    type: FETCH_PRODUCT_DETAILS_ERROR,
    error,
  };
}
