
import React from "react";
import routes from './AppRoutes.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function AppRoutes()) {
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
              )}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

