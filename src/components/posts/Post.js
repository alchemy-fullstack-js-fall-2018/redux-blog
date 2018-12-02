import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  const { title, body } = post;

  return (
    <li>{title}
      <p>{body}</p>
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
