import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import AllUsers from './containers/AllUsers';
import AllPosts from './containers/posts/AllPosts';
import LongPosts from './containers/posts/LongPosts';
import UserDetail from './components/users/UserDetail';

export const ROUTES = {
  LONG_POSTS: {
    path: '/',
    Component: LongPosts,
    linkTo: () => '/',
    navLink: true,
    label: 'Home'
  },
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
  USER_DETAIL: {
    path: '/users/:id',
    Component: UserDetail,
    linkTo: id => `/users/${id}`,
    navLink: false
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
