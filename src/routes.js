import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserDetail from './containers/UserDetail';
import AllUsers from './containers/AllUsers';
import LongPosts from './containers/LongPosts';
import Home from './components/home/Home';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  LONG_POSTS: {
    path: '/posts',
    Component: LongPosts,
    linkTo: () => '/posts'
  },
  USER_DETAIL: {
    path: '/users/:id',
    Component: UserDetail,
    linkTo: id => `/users/${id}`
  },
  ALL_USERS: {
    path: '/users',
    Component: AllUsers,
    linkTo: () => '/users'
  },

};

export const navLinks = () => {
  return Object.keys(ROUTES)
    .filter(routeName => ROUTES[routeName].linkTo.length === 0)
    .map((routeName, i) => {
      return <Link key={i} to={ROUTES[routeName].linkTo()}>{routeName.toLowerCase().replace('_', ' ')}</Link>;
    });
};


export const routerRoutes = () => {
  return Object.values(ROUTES)
    .map((route, i) => {
      return <Route exact={route.linkTo.length === 0} key={i} path={route.path} component={route.Component} />;
    });
};
