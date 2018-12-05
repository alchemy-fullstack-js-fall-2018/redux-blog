import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to={ROUTES.USERS.linkTo()}>Users</Link>
        <Link to={ROUTES.POSTS_SEARCH.linkTo()}>Posts Search</Link>
        <Link to={ROUTES.HOME.linkTo()}>Home</Link>
      </nav>
    </header>
  );
}
