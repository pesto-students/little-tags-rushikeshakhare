import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
} from "./Types";

interface ICategoriesState {
  loading: boolean;
  categories: any;
  error: any;
}

const initialState = {
  loading: false,
  categories: null,
  error: null,
};

interface ICategoriesReducerAction {
  type:
    | typeof FETCH_CATEGORIES
    | typeof FETCH_CATEGORIES_SUCCESS
    | typeof FETCH_CATEGORIES_ERROR;
  response?: any;
  error?: any;
}

export default function reducer(
  state: ICategoriesState = initialState,
  { type, response, error }: ICategoriesReducerAction
): ICategoriesState {
  switch (type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: response };
    case FETCH_CATEGORIES_ERROR:
      return { ...state, error: error };
    default:
      return { ...state };
  }
}
