import React from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { Route, HashRouter, Switch } from "react-router-dom";
import { AppContainer } from "../AppContainer";
import { RouteMappings, IRoute } from "./RouteMappings";

interface IAppRouterProps {
  authenticated: boolean;
}

export const AppRouter = ({ authenticated }: IAppRouterProps) => {
  return (
    <HashRouter>
      <AppContainer authenticated={authenticated}>
        <Switch>
          {RouteMappings.map(
            ({ isUserAuthenticated, component: Component, path }: IRoute) => {
              if (isUserAuthenticated)
                return (
                  <ProtectedRoute
                    path={path}
                    exact
                    component={Component}
                    authenticated={authenticated}
                  />
                );
              else
                return (
                  <Route
                    path={path}
                    exact
                    render={(props) => (
                      <Component authenticated={authenticated} {...props} />
                    )}
                  />
                );
            }
          )}
        </Switch>
      </AppContainer>
    </HashRouter>
  );
};
