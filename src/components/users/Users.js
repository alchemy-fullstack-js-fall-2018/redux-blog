import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';

export default class Users extends PureComponent {

  static propTypes = {
    users: PropTypes.object.isRequired,
    fetchUsers: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render(){
    const { users } = this.props;

    const usersList = users.map(user => {
      return <User key={user.id} user={user} />
    });

    return(
      <Fragment>
        <h2>Users</h2>
        <ul>
          {usersList}
        </ul>
      </Fragment>
    );
  }
}
