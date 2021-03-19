import {
  Home,
  SelectPaymentMethod,
  SelectAddress,
  AddAddress,
  ProductDetails,
  ProductList,
  Cart,
  Orders,
  ThankYou,
  Sorry,
  WishList,
} from "../screens";
import { ROUTES } from "../AppConfig";
import { TestBed } from "../testbed";

export interface IRoute {
  path: string;
  component: any;
  isUserAuthenticated: boolean;
}

export const RouteMappings: IRoute[] = [
  {
    path: ROUTES.HOME,
    component: Home,
    isUserAuthenticated: false,
  },
  {
    path: ROUTES.ADD_ADDRESS,
    component: AddAddress,
    isUserAuthenticated: true,
  },
  {
    path: ROUTES.SELECT_PAYMENT_METHOD,
    component: SelectPaymentMethod,
    isUserAuthenticated: true,
  },
  {
    path: ROUTES.SELECT_ADDRESS,
    component: SelectAddress,
    isUserAuthenticated: true,
  },
  {
    path: ROUTES.PRODUCT_LIST,
    component: ProductList,
    isUserAuthenticated: false,
  },
  {
    path: ROUTES.PRODUCT_DETAILS(":id"),
    component: ProductDetails,
    isUserAuthenticated: false,
  },
  {
    path: ROUTES.CATEGORY_PRODUCTS(":category"),
    component: ProductList,
    isUserAuthenticated: false,
  },
  {
    path: ROUTES.CART,
    component: Cart,
    isUserAuthenticated: true,
  },
  {
    path: ROUTES.PAST_ORDERS,
    component: Orders,
    isUserAuthenticated: true,
  },
  {
    path: ROUTES.TESTBED,
    component: TestBed,
    isUserAuthenticated: false,
  },
  {
    path: ROUTES.THANK_YOU,
    component: ThankYou,
    isUserAuthenticated: true,
  },
  {
    path: ROUTES.SORRY,
    component: Sorry,
    isUserAuthenticated: true,
  },
  {
    path: ROUTES.WISH_LIST,
    component: WishList,
    isUserAuthenticated: true,
  },
];
