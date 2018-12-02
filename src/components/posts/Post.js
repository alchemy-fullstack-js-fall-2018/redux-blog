import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <Fragment>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </Fragment>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
