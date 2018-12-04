import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route component={ROUTES.ALL_USERS.Component} path={ROUTES.ALL_USERS.path} />
        </Switch>
      </Router>
    </Fragment>
  );
}
