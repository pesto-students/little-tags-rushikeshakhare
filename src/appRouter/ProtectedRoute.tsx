import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  authenticated,
  ...routeProps
}: any) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        authenticated === true ? (
          <Component authenticated={authenticated} {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};
