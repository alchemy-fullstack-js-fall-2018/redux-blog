import React from 'react';
import { Link } from 'react-router-dom';
import UserDetail from './containers/UserDetail';
import AllUsers from './containers/AllUsers';
import LongPosts from './containers/LongPosts';

export const ROUTES = {
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

// export const navLinks = Object.keys(ROUTES)
//   .filter(routeName => ROUTES[routeName].linkTo.length === 0)
//   .map(routeName => {
//     return <Link to={ROUTES[routeName].linkTo()}>{routeName}</Link>;
// });
