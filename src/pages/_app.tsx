import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UnderConstruction from './under-construction';
import Training from './training';
import { menuTitles, menuUrls } from '../constants/structures';

export default function _app() {
  return (
    <Router>
      <Switch>
        <Route path={menuUrls.discover}>
          <UnderConstruction pageTitle={menuTitles.discover} />
        </Route>
        <Route path={menuUrls.diet}>
          <UnderConstruction pageTitle={menuTitles.diet} />
        </Route>
        <Route path={menuUrls.training}>
          <Training />
        </Route>
      </Switch>
    </Router>
  );
}
