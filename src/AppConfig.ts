export const DEFAULT_USER_UNAUTHORIZED_ROUTE = "/";
export const POPUP_CONTAINER_ID = "popup-container";
export const TOAST_CONTAINER_ID = "toast";
export const TOAST_TIMEOUT = 2000;
export const ROUTES = {
  HOME: "/",
  ADD_ADDRESS: "/add-address",
  SELECT_PAYMENT_METHOD: "/select-payment-method",
  SELECT_ADDRESS: "/select-address",
  PRODUCT_LIST: "/product-list",
  PRODUCT_DETAILS: (id: any) => `/product-details/${id}`,
  CART: "/cart",
  PAST_ORDERS: "/past-orders",
  TESTBED: "/testbed",
  THANK_YOU: "/payment-success",
  SORRY: "/payment-failed",
  WISH_LIST: "/wish-list",
  CATEGORY_PRODUCTS:(category:any) => `/category/${category}`
};

export const CONTAINER_SCROLL_THROTTLE_TIME = 100;
export const HEADER_SCROLL_THRESHOLD = 50;

export const LOGIN_LOADED_STORAGE_KEY = "loginLoaded";
export const USER_ORDERS_STORAGE_KEY = "userOrder";
export const USER_CART_STORAGE_KEY = "userCart";
export const USER_ADDRESSES_STORAGE_KEY = "addresses";
export const USER_WISH_LIST_STORAGE_KEY = "userWishList";

export const PHONE_NUMBER_WITH_COUNTRY_CODE = (phoneNumber: any) =>
  `+91${phoneNumber}`;
export const CAPTCHA_CONTAINER_ID = "sign-in-button";
