import * as React from "react";
import { TestBed } from "./testbed";
import { HashRouter, Route } from "react-router-dom";
import { AppContainer } from "./AppContainer";
import {
  Home,
  SelectPaymentMethod,
  SelectAddress,
  AddAddress,
} from "./screens";
import "./App.scss";

const App = (props: any): JSX.Element => {
  return (
    <>
      <AppContainer>
        <HashRouter>
          <Route path="/" exact component={Home} />
          <Route path="/add-address" exact component={AddAddress} />
          <Route
            path="/select-payment-method"
            exact
            component={SelectPaymentMethod}
          />
          <Route path="/select-address" exact component={SelectAddress} />

          <Route path="/testbed" exact component={TestBed} />
        </HashRouter>
      </AppContainer>
    </>
  );
};

export default App;
