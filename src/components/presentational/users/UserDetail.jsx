import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PostList from '../posts/PostList.jsx';

export default class UserDetail extends PureComponent {

  static propTypes = {
    user: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired
  };

  render() {
    const {
      id, name, username, email,
      address, phone, website, company
    } = this.props.user;
    const { posts } = this.props;

    // <p>address: {address}</p>
    // <p>company: {company}</p>

    return (
      <div>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>username: {username}</p>
        <p>email: {email}</p>

        <p>phone: {phone}</p>
        <p>website: {website}</p>
        <PostList posts={posts} />
      </div>
    );

  }
}
