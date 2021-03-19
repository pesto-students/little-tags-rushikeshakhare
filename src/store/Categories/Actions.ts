import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_SUCCESS,
} from "./Types";
import { ActionDispatcher } from "../ActionDispatcher/ActionDispatcher";

export function fetchCategories() {
  return ActionDispatcher.getInstance().dispatch({
    type: FETCH_CATEGORIES,
  });
}

export function fetchCategoriesSuccess(response: any) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    response,
  };
}

export function fetchCategoriesError(error: any) {
  return {
    type: FETCH_CATEGORIES_ERROR,
    error,
  };
}
