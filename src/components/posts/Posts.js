import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default class Posts extends PureComponent {

  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    searchTerm: PropTypes.string,
    updateSearchTerm: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, searchTerm, updateSearchTerm } = this.props;

    const postItems = posts.map(post => <Post key={post.id} post={post} />);

    return (
      <Fragment>
        <h2>Posts</h2>
        {updateSearchTerm &&
        <form>
          <label htmlFor="searchTerm">Title search: </label>
          <input type="text" value={searchTerm} onChange={updateSearchTerm} />
        </form>}
        <div>
          {postItems}
        </div>
      </Fragment>
    );
  }
}
