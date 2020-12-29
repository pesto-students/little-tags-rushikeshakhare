import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_ERROR,
} from "./Types";

interface IProductsState {
  loading: boolean;
  products: any;
  error: any;
  productDetails?: any;
}

const initialState = {
  loading: false,
  products: null,
  error: null,
};

interface IProductsReducerAction {
  type:
    | typeof FETCH_PRODUCTS
    | typeof FETCH_PRODUCTS_SUCCESS
    | typeof FETCH_PRODUCTS_ERROR
    | typeof FETCH_PRODUCT_DETAILS_ERROR
    | typeof FETCH_PRODUCT_DETAILS_SUCCESS;
  response?: any;
  error?: any;
}

export default function reducer(
  state: IProductsState = initialState,
  { type, response, error }: IProductsReducerAction
): IProductsState {
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: response };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, error: error };
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return { ...state, productDetails: response };
    case FETCH_PRODUCT_DETAILS_ERROR:
      return { ...state, error: error };
    default:
      return { ...state };
  }
}
