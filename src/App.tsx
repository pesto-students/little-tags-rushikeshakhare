import * as React from "react";
import { AppRouter } from "./appRouter";
import { withAuth } from "./hocs/withAuth";
import { Provider } from "react-redux";
import appStore from "./store";
import "./App.scss";

const App = (props: any): JSX.Element => {
  return (
    <Provider store={appStore}>
      <AppRouter authenticated={props.authenticated} />
    </Provider>
  );
};

export default withAuth(App);
