import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <p>{post.title}</p>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
