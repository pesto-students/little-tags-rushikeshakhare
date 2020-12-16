import * as React from "react";
import { TestBed } from "./testbed";
import { HashRouter, Route } from "react-router-dom";
import "./App.scss";

const App = (props: any): JSX.Element => {
  return (
    <HashRouter>
      <Route path="/" exact render={() => <>Helloworld</>} />
      <Route path="/testbed" exact component={TestBed} />
    </HashRouter>
  );
};

export default App;
