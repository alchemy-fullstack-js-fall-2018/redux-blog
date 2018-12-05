import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default class Posts extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    filteredPosts: PropTypes.array.isRequired
  };

  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const postComponents = posts.map(post => {
      return <Post key={post.id} post={post} />;
    });

    return (
      <Fragment>
        <h2>Posts</h2>
        {postComponents}
      </Fragment>
    );
  }
}
