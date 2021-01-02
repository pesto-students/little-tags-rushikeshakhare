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
} from "../screens";
import { TestBed } from "../testbed";

export interface IRoute {
  path: string;
  component: any;
  isUserAuthenticated: boolean;
}

export const RouteMappings: IRoute[] = [
  {
    path: "/",
    component: Home,
    isUserAuthenticated: false,
  },
  {
    path: "/add-address",
    component: AddAddress,
    isUserAuthenticated: true,
  },
  {
    path: "/select-payment-method",
    component: SelectPaymentMethod,
    isUserAuthenticated: true,
  },
  {
    path: "/select-address",
    component: SelectAddress,
    isUserAuthenticated: true,
  },
  {
    path: "/product-list",
    component: ProductList,
    isUserAuthenticated: false,
  },
  {
    path: "/product-details/:id",
    component: ProductDetails,
    isUserAuthenticated: false,
  },
  {
    path: "/cart",
    component: Cart,
    isUserAuthenticated: true,
  },
  {
    path: "/past-orders",
    component: Orders,
    isUserAuthenticated: true,
  },
  {
    path: "/testbed",
    component: TestBed,
    isUserAuthenticated: false,
  },
  {
    path: "/thank-you",
    component: ThankYou,
    isUserAuthenticated: true,
  },
  {
    path: "/sorry",
    component: Sorry,
    isUserAuthenticated: true,
  },
];
