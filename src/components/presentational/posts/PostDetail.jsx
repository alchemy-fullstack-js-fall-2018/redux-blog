import React from 'react';
import PropTypes from 'prop-types';

const PostDetail = ({ post }) => {
  const { id, userId, title, body } = post;

  return (
    <div>
      <p>id: {id}</p>
      <p>userId: {userId}</p>
      <p>title: {title}</p>
      <p>body: {body}</p>
    </div>
  );
};

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetail;
