import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Header from '../app/Header';
import { appRoutes } from '../../routes';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          {appRoutes}
        </Switch>
      </Fragment>
    </Router>
  );
}
