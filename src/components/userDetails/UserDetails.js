import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class UserDetails extends PureComponent {

  static propTypes = {
    users: PropTypes.object.isRequired,
    fetchUsers: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
}

  render() {
    const { id, name, username, email } = user;

    return (
      <Fragment>
        <h3>User Details</h3>
        <h3>{id}</h3>
        <h3>Name: {name}</h3>
        <h3>Username: {username}</h3>
        <h3>Email: {email}</h3>
      </Fragment>
    );
}
}
