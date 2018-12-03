import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

const User = ({ user }) => {
  const { id, name, email } = user;

  return (
    <Fragment>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>email: {email}</p>
      {/* <Link to={ROUTES.USER_DETAIL.linkTo(id)}>More Details</Link> */}
    </Fragment>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
