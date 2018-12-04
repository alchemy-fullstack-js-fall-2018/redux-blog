import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const User = ({ id, name, username, email }) => {
  return (
    <li>
      <Link to={ROUTES.USER_DETAIL.linkTo(id)}>
        <h3>{username}</h3>
        <p>{name}</p>
        <p>{email}</p>
      </Link>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.object
};

export default User;
