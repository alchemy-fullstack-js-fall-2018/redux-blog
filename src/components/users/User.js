import React, { Fragment } from 'react';
import ROUTES from '../../routes/routes';
import { Link } from 'react-router-dom';

export default function User({ user }) {
  return (
    <Fragment>
      <Link to={ROUTES.USER_DETAIL.linkTo(user.id)}>{user.username}</Link>
      <br />
    </Fragment>
  );
}
