import React from 'react';
import { Link } from 'react-router-dom';
import Home from './components/home/Home';
import UserDetail from './components/userDetails/UserDetails';
import Users from './components/users/Users';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  USER_DETAIL: {
    path: '/users/:id',
    Component: UserDetail,
    linkTo: id => `/users/${id}`
  },
  ALL_USERS: {
    path: '/users',
    Component: Users,
    linkTo: () => '/users'
  }

};

// export const navLinks = Object.keys(ROUTES)
//   .filter(routeName => ROUTES[routeName].linkTo.length === 0)
//   .map(routeName => {
//     return <Link to={ROUTES[routeName].linkTo()}>{routeName}</Link>;
// });
