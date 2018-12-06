import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';

const Users = ({ users }) => {

  const usersList = users.map(user => {
    return <User key={user.id} user={user} />
  });

  return(
    <ul>
      {usersList}
    </ul>
  );

}
