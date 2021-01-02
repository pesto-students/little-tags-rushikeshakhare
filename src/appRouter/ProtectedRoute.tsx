import React from "react";
import { Route, Redirect } from "react-router-dom";
import { DEFAULT_USER_UNAUTHORIZED_ROUTE } from "../AppConstants";

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
          <Redirect
            to={{
              pathname: DEFAULT_USER_UNAUTHORIZED_ROUTE,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
