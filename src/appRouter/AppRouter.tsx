import React from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { Route, HashRouter, Switch } from "react-router-dom";
import {
  Home,
  SelectPaymentMethod,
  SelectAddress,
  AddAddress,
  ProductDetails,
  ProductList,
  Cart,
  Orders,
} from "../screens";
import { TestBed } from "../testbed";

export const AppRouter = ({ authenticated }: any) => {
  return (
    <HashRouter>
      <Switch>
        <PublicRoute
          path="/"
          exact
          component={Home}
          authenticated={authenticated} // add from props
        />
        <ProtectedRoute
          path="/add-address"
          exact
          component={AddAddress}
          authenticated={authenticated} // add from props
        />
        <ProtectedRoute
          path="/select-payment-method"
          exact
          component={SelectPaymentMethod}
          authenticated={authenticated} // add from props
        />
        <ProtectedRoute
          path="/select-address"
          exact
          component={SelectAddress}
          authenticated={authenticated} // add from props
        />
        <PublicRoute
          path="/product-list"
          exact
          component={ProductList}
          authenticated={authenticated} // add from props
        />
        <PublicRoute
          path="/product-details/:id"
          exact
          component={ProductDetails}
          authenticated={authenticated}
        />
        <ProtectedRoute
          path="/cart"
          exact
          component={Cart}
          authenticated={authenticated}
        />
        <PublicRoute
          path="/past-orders"
          exact
          component={Orders}
          authenticated={authenticated}
        />
        <PublicRoute
          path="/testbed"
          exact
          component={TestBed}
          authenticated={authenticated}
        />
      </Switch>
    </HashRouter>
  );
};
