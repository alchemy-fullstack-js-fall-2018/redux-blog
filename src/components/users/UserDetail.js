import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Posts from '../../containers/posts/UserPosts';

export default class UserDetail extends PureComponent {

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const { name, username, email } = this.props.user;

    return (
      <Fragment>
        <h2>Name: {name}</h2>
        <p>Username: {username}</p>
        <p>E-mail: {email}</p>
        <Posts posts={[]} />
      </Fragment>
    );
  }
}
