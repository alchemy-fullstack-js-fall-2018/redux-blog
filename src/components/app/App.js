import React, { Fragment } from 'react';
import Header from '../header/Header';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import ROUTES from '../../routes';

export default function App() {
  console.log(ROUTES);
  return (
    <Fragment>
      <h1>Welcome!</h1>
      <Header />
      <Router>
        <Switch>
          {/* <Route path={ROUTES.HOME.path} component={ROUTES.HOME.Component} /> */}

        </Switch>
      </Router>
    </Fragment>
  );
}
