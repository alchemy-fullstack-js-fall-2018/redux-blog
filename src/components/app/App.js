import React, { Fragment } from 'react';
import Header from '../header/Header';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function App() {
  console.log(ROUTES);
  return (
    <Fragment>
      <h1>Welcome!</h1>
      <Header />
      <Router>
        <Switch>
          <Route path={ROUTES.LONG_POSTS.path} component={ROUTES.LONG_POSTS.Component} />
          <Route path={ROUTES.USER_DETAIL.path} component={ROUTES.USER_DETAIL.Component} />
          <Route path={ROUTES.ALL_USERS.path} component={ROUTES.ALL_USERS.Component} />
        </Switch>
      </Router>
    </Fragment>
  );
}
