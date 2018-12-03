import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PostList from '../posts/PostList';

export default class UserDetail extends PureComponent {

  static propTypes = {
    user: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired
  };

  render() {
    const { id, name, username, email } = this.props.user;
    const { posts } = this.props;
    return (
      <div>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>username: {username}</p>
        <p>email: {email}</p>
        <h3>Posts:</h3>
        <PostList posts={posts} />
      </div>
    );

  }
}
