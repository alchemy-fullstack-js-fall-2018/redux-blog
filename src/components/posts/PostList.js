import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Post from './post';
import Loader from '../loader/Loader';

export default class PostList extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func,
    updateSearchTerm: PropTypes.func,
    isLoading: PropTypes.bool
  };

  render() {
    const { posts, isLoading } = this.props;
    const postList = posts.map(post => {
      return (
        <Post
          key={post.id}
          post={post}
        />
      );
    });

    return (
      <div>
        {isLoading ?
          <Loader />
          :
          <div>
            {postList}
          </div>
        }
      </div>
    );
  }
}

