import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../header/Header';
import 'normalize.css';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>

        </Switch>
      </Fragment>
    </Router>
  );
};
