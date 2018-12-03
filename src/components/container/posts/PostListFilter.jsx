import { connect } from 'react-redux';
import PostList from '../../presentational/posts/PostList.jsx';
import { getFilteredPosts, loadingPostsCheck, getQuery } from '../../../data/state/selectors/posts';
import { fetchPosts, postsUpdateQuery } from '../../../data/state/actions/posts';

import React, { Fragment } from 'react';
import styled from 'styled-components';


const StyledLabel = styled.label`
  margin: 0px auto;
  display: inline;
  justify-self: end;
`;

const StyledInput = styled.input`
  justify-self: start;
  margin: 5px;
  width: 25%;
  display: inline-block;
  margin: 0px auto;
`;


const PostListFilter = ({
  posts, isLoading, fetchPosts, query, postsUpdateQuery
}) => {
  return (
    <Fragment>
      <StyledLabel htmlFor="query">Search:</StyledLabel>
      <StyledInput
        name="query" type="text"
        value={query} onChange={postsUpdateQuery}
      ></StyledInput>

      <PostList
        posts={posts}
        isLoading={isLoading}
        fetchPosts={fetchPosts}
      />
    </Fragment>
  );
};


const mapStateToProps = state => ({
  posts: getFilteredPosts(state),
  isLoading: loadingPostsCheck(state),
  query: getQuery(state)
});

const mapDispatchToProps = dispatch => ({
  postsUpdateQuery: ({ target }) => dispatch(postsUpdateQuery(target.value)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListFilter);
