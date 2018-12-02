import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Home extends PureComponent {

  static propTypes = {
    posts: PropTypes.array.isRequired
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
      return <li key={i}>{post.title}</li>;
    });

    return (
      <div>
        {posts && <h1>{postList}</h1>}
      </div>
    );
  }
}
