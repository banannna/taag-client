import React from "react";
import { Router, Route } from "react-router-dom";
import routes from "./Constants/route.config";
import history from "./Utils/history";
import RouteProtector from "./Components/Shared/RouteProtector";
import { BaseStyles } from "@primer/components";

const App = () => {
  return (
    <BaseStyles>
      <Router history={history}>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={() => (
              <RouteProtector
                component={route.component}
                fallback={route.fallback}
                isGuarded={route.isGuarded}
              />
            )}
          />
        ))}
      </Router>
    </BaseStyles>
  );
};

export default App;
