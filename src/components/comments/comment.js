import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  const { id, postId, name, email, body } = comment;

  return (
    <Fragment>

      <p>id: {id}</p>
      <p>postId: {postId}</p>
      <p>name: {name}</p>
      <p>email: {email}</p>
      <p>body: {body}</p>
    </Fragment>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
