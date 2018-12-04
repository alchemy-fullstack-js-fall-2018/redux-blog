import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class UserDetail extends Component {
  static propTypes = {
    user: PropTypes.object,
    fetchUser: PropTypes.func,
    match: PropTypes.object
  };

  componentDidMount() {
    const { fetchUser, match } = this.props;
    fetchUser(match.params.id);
  }

  render() {
    const { user } = this.props;
    if(!user) return null;
    return (
      <Fragment>
        <h2>User Detail</h2>
        <h3>Username: {user.username}</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </Fragment>
    );
  }
}
