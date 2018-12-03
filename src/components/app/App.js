import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes';
import Header from '../header/Header';


const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route component={ROUTES.POST_SEARCH.Component} path={ROUTES.POST_SEARCH.path} />
          <Route component={ROUTES.POST_DETAIL.Component} path={ROUTES.POST_DETAIL.path} />
          <Route component={ROUTES.USERS.Component} path={ROUTES.USERS.path}/>
          <Route component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
          <Redirect to={ROUTES.HOME.path} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
