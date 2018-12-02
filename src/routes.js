import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import AllUsers from './containers/AllUsers';
import AllPosts from './containers/AllPosts';
import LongPosts from './containers/LongPosts';

export const ROUTES = {
  ALL_USERS: {
    path: '/allUsers',
    Component: AllUsers,
    linkTo: () => '/allUsers',
    navLink: true,
    label: 'All Users'
  },
  ALL_POSTS: {
    path: '/allPosts',
    Component: AllPosts,
    linkTo: () => '/allPosts',
    navLink: true,
    label: 'All Posts'
  },
  LONG_POSTS: {
    path: '/longPosts',
    Component: LongPosts,
    linkTo: () => '/longPosts',
    navLink: true,
    label: 'Long Posts'
  }
};

export const navLinks = Object.keys(ROUTES)
  .filter(key => ROUTES[key].navLink)
  .map(key => {
    return <Link
      key={key}
      to={ROUTES[key].linkTo()}>
      {ROUTES[key].label}
    </Link>;
  });

export const appRoutes = Object.keys(ROUTES)
  .map(key => {
    return <Route
      exact key={key}
      component={ROUTES[key].Component}
      path={ROUTES[key].path}
    />;
  });
