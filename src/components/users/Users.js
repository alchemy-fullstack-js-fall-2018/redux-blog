import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import User from './User';

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

    const userItems = users.map(user => <User key={user.id} user={user} />);


    return (
      <Fragment>
        <h2>Users</h2>
        <ul>
          {userItems}
        </ul>
      </Fragment>
    );
  }
}
