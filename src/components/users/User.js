import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes';

function User({ user }) {
  const { name, username, email, userId } = user;

  return (
    <Fragment>
      <li><Link to={ROUTES.USER_DETAIL.linkTo(userId)}>{name} ({username}) - {email}</Link></li>
    </Fragment>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
