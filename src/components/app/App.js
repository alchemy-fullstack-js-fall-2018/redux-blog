import React, { Fragment } from 'react';
import Header from '../header/Header';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { routerRoutes } from '../../routes';

export default function App() {
  console.log(routerRoutes);
  return (
    <Fragment>
      <h1>Welcome!</h1>
      <Header />
      <Router>
        <Switch>
          {routerRoutes()}
        </Switch>
      </Router>
    </Fragment>
  );
}
