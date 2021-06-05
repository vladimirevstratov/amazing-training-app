import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UnderConstruction from "./under-construction";
import Training from "./training";

export default function _app() {
  return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/discover">
              <UnderConstruction />
            </Route>
            <Route path="/diet">
              <UnderConstruction />
            </Route>
            <Route path="/">
              <Training />
            </Route>
          </Switch>
      </Router>
  );
}
