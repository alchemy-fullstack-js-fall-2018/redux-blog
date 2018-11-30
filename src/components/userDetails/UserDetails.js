import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {

  return (
    <Fragment>
      <li>{user.name}</li>
      <li>{user.username}</li>
      <li>{user.email}</li>
      <li>{user.posts}</li>
    </Fragment>
  );
};

User.propTypes = {
  car: PropTypes.object.isRequired,
};

export default User;
