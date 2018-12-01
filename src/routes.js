import React from 'react';
import {
  Route,
  Link } from 'react-router-dom';

import AllUsers from './containers/AllUsers';

export const ROUTES = {
  ALL_USERS: {
    path: '/allUsers',
    Component: AllUsers,
    linkTo: () => '/allUsers',
    navLink: true,
    label: 'All Users'
  }
};

export const navLinks = Object.keys(ROUTES)
  .filter(routeName => ROUTES[routeName].navLink)
  .map(routeName => {
    return <Link key={ROUTES[routeName]} to={ROUTES[routeName].linkTo()}>{ROUTES[routeName].label}</Link>;
  });

export const appRoutes = Object.keys(ROUTES)
  .map(routeName => {
    return <Route exact key={ROUTES[routeName]} component={ROUTES[routeName].Component} path={ROUTES[routeName].path} />;
  });
