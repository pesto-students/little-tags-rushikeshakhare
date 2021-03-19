import { call, put } from "redux-saga/effects";
import { categoriesService } from "./Service";
import { fetchCategoriesSuccess, fetchCategoriesError } from "./Actions";

export function* handleCategoriesFetch(): any {
  try {
    const response = yield call(categoriesService);
    const jsonResponse = yield response.json();
    yield put(fetchCategoriesSuccess(jsonResponse));
  } catch (error) {
    yield put(fetchCategoriesError(error));
  }
}
