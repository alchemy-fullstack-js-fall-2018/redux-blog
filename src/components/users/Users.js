import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';

export default class Users extends PureComponent {

  static propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired
  }

  componentDidMount() {
    if(this.props.users.length < 1) {
      this.props.fetchUsers();
    }
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
