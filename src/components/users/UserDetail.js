import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import UserPosts from '../../containers/posts/UserPosts';

export default class UserDetail extends PureComponent {

  static propTypes = {
    user: PropTypes.object.isRequired,
    fetchUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    const { name, username, email, id } = this.props.user;

    return (
      <Fragment>
        <h2>User Detail</h2>
        <h2>Name: {name}</h2>
        <p>Username: {username}</p>
        <p>E-mail: {email}</p>
        <UserPosts id={id} posts={[]} />
      </Fragment>
    );
  }
}
