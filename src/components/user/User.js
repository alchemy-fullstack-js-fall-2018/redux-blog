import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES }  from '../../routes';

const User = ({ user }) => {

  const { id, name, username, email } = user;

  return (
    <Fragment>
      <li><Link to={ROUTES.USER_DETAIL.linkTo(id)}>{name} ({username}) - {email}</Link></li>
    </Fragment>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User;
