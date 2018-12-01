import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Users extends PureComponent {

  static propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <Fragment>
        <h2>Users</h2>
        <ul>
          {users.map(user => <li key={user.name}>{user.name}</li>)}
        </ul>
      </Fragment>
    );
  }
}
