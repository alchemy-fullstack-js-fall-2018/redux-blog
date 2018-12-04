import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import User from './User.js';

export default class UserList extends PureComponent {

  static propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if(!this.props.users) this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    const userList = users.map(user => {
      return (
        <User
          key={user.id}
          user={user}
        />
      );
    });

    return (
      <div>
        {userList}
      </div>
    );
  }
}
