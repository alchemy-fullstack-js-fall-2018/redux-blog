import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Posts extends PureComponent {

  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <Fragment>
        <h2>Posts</h2>
        <ul>
          {posts.map(post => <li key={post.title}>{post.body}</li>)}
        </ul>
      </Fragment>
    );
  }
}
