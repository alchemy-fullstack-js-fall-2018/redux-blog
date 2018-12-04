import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import User from './User';

export default class Users extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const { users } = this.props;
    const userComponents = users.map(user => {
      return <User key={user.id} user={user} />;
    });

    return (
      <Fragment>
        <h2>Users</h2>
        {userComponents}
      </Fragment>
    );
  }
}
