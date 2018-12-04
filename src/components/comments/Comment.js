import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  const { name, email, body } = comment;

  return (
    <li>{name} - {email}
      <p>{body}</p>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
