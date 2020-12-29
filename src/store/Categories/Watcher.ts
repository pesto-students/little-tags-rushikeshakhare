import { takeEvery } from "redux-saga/effects";
import { FETCH_CATEGORIES } from "./Types";
import { handleCategoriesFetch } from "./Saga";

export default function categoriesWatcher() {
  return takeEvery(FETCH_CATEGORIES, handleCategoriesFetch);
}
