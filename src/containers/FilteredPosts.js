import { connect } from 'react-redux';
import { getPostSearchTerm, getFilteredPosts, loadingStatus } from '../selectors/posts';
import { fetchPosts, updatePostsSearchTerm } from '../actions/posts';
import React, { Fragment } from 'react';
import PostList from '../components/posts/PostList';

const FilteredPosts = ({ posts, searchTerm, updateSearchTerm }) => {
  return (
    <Fragment>
      <h3>Search Posts</h3>
      <div>
        <form>
          <label htmlFor="searchTerm">Search: </label>
          <input type="text" value={searchTerm} onChange={updateSearchTerm} />
        </form>
      </div>
      <PostList posts={posts} />
    </Fragment>
  );
};


const mapStateToProps = state => ({
  posts: getFilteredPosts(state),
  searchTerm: getPostSearchTerm(state),
  isLoading: loadingStatus(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(updatePostsSearchTerm(target.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredPosts);
