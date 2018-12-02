import React, { Fragment } from 'react';
import PropTypes from 'prop-types';



const Post = ({ post }) => {
  const { id, userId, title, body } = post;

  return (
    <Fragment>
      <p>id: {id}</p>
      <p>userId: {userId}</p>
      <p>title: {title}</p>
      <p>body: {body.slice(0, 40)} ...</p>
    </Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
