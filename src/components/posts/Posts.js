import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default class Posts extends PureComponent {

  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    id: PropTypes.number
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    const postItems = posts.map(post => <Post key={post.id} post={post} />);

    return (
      <Fragment>
        <h2>Posts</h2>
        <div>
          {postItems}
        </div>
      </Fragment>
    );
  }
}
