import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import Header from '../header/Header';

export default function App() {
  return (
    <Fragment>
      <h1>Hello World!</h1>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route
              path={ROUTES.USER_DETAIL.path}
              component={ROUTES.USER_DETAIL.component}
            />
            <Route
              path={ROUTES.USERS.path}
              component={ROUTES.USERS.component}
            />
            <Route
              path={ROUTES.POST_DETAIL.path}
              component={ROUTES.POST_DETAIL.component}
            />
            <Route
              path={ROUTES.POSTS_SEARCH.path}
              component={ROUTES.POSTS_SEARCH.component}
            />
            <Route path={ROUTES.HOME.path} component={ROUTES.HOME.component} />
          </Switch>
        </Fragment>
      </Router>
    </Fragment>
  );
}
