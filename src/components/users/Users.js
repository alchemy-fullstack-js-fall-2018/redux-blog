import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import User from './User';

export default class Users extends PureComponent {
  static propTypes = {
    users: PropTypes.object.isRequired
  };

  render() {
    const { users } = this.props.users;

    //do these dudes need to be components?
    const usersComponents = users.map(user => {
      return (
        <User key={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
        />
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
