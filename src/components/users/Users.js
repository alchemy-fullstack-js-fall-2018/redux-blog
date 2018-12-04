import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Users extends PureComponent {
  static propTypes = {
    users: PropTypes.object.isRequired
  };

  render() {
    const { users } = this.props.users;

    //do these dudes need to be components?
    console.log(users);
    const usersComponents = users.map(user => {
      return (
        <li key={user.id}>
          {user.name}
        </li>
      );
    });

    return (
      <Fragment>
        <ul>
          {usersComponents}
        </ul>
      </Fragment>
    );
  }
}
