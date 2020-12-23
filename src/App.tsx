import * as React from "react";
import { TestBed } from "./testbed";
import { HashRouter, Route } from "react-router-dom";
import {
  Home,
  SelectPaymentMethod,
  SelectAddress,
  AddAddress,
  ProductDetails,
  ProductList,
  Cart,
  Orders,
} from "./screens";
import "./App.scss";

const App = (props: any): JSX.Element => {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/add-address" exact component={AddAddress} />
      <Route
        path="/select-payment-method"
        exact
        component={SelectPaymentMethod}
      />
      <Route path="/select-address" exact component={SelectAddress} />
      <Route path="/product-list" exact component={ProductList} />
      <Route path="/product-details" exact component={ProductDetails} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/past-orders" exact component={Orders} />
      <Route path="/testbed" exact component={TestBed} />
    </HashRouter>
  );
};

export default App;
