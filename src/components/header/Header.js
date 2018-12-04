import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function Header() {
  return (
    <header>
      <div>
        <h3>ITS A REDUX BLOG</h3>
      </div>
      <div>
        <Link to={ROUTES.HOME.linkTo('/home')}>Home</Link>
        <Link to={ROUTES.POST_SEARCH.linkTo('/posts/search')}>Search Posts</Link>
        <Link to={ROUTES.USERS.linkTo('/users')}>Users</Link>
      </div>
    </header>
  );
}

