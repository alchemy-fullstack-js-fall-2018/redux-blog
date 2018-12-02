import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes';


const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
          <Redirect to={ROUTES.HOME.path} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
