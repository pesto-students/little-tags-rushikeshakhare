import * as React from "react";
import { TestBed } from "./testbed";
import { HashRouter, Route } from "react-router-dom";
import { Home, ProductDetails, ProductList } from "./screens";
import "./App.scss";

const App = (props: any): JSX.Element => {
  return (
    <HashRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/product-list" exact component={ ProductList } />
      <Route path="/product-details" exact component={ ProductDetails } />
      <Route path="/testbed" exact component={TestBed} />
    </HashRouter>
  );
};

export default App;
