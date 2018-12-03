import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Home extends PureComponent {

  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPostsPromise: PropTypes.func.isRequired
  };

  fetchPosts = () => {
    this.props.fetchPostsPromise();
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const postList = posts.map((post, i) => {
      return (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      );
    });

    return (
      <div>
        <ul>{postList}</ul>
      </div>
    );
  }
}
