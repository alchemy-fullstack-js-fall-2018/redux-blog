import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class Users extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsersPromise: PropTypes.func.isRequired
  };

  fetchUsers = () => {
    this.props.fetchUsersPromise();
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { users } = this.props;
    const usersList = users.map((user, i) => {
      return <li key={i}>{user.name}</li>;
    });

    return (
      <div>
        <ul>
          {users && usersList}
        </ul>
      </div>
    );
  }
}
