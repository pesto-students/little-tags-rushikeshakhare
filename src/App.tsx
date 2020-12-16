import * as React from "react";
import { TestBed } from "./testbed";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

const App = (props: any): JSX.Element => {
  return (
    <Router>
      <Route path="/" exact render={() => <>Helloworld</>} />
      <Route path="/testbed" exact component={TestBed} />
    </Router>
  );
};

export default App;
