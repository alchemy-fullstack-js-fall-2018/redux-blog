import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const UserDetail = ({ user }) => {
  return (
    <Fragment>
      <li key={user.id}>{user.id}</li>
      <li>{user.name}</li>
      <li>{user.username}</li>
      <li>{user.email}</li>
      <li>{user.post}</li>
    </Fragment>
  );
};

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserDetail;
