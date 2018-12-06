import React, { Fragment } from 'react';
import Posts from './Posts';

const PostsSearch = ({ posts, searchTerm, updateSearchTerm, fetchPosts }) => {
  return (
    <Fragment>
      <h2>Search for Post By Title</h2>
      <input value={searchTerm} onChange={updateSearchTerm} />
      <Posts posts={posts} fetchPosts={fetchPosts} />
    </Fragment>
  );
};

export default PostsSearch;
