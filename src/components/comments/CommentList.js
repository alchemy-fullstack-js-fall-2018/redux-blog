import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';

const CommentList = ({ comments }) => {

  const commentList = comments.map(comment => {
    return (
      <Comment
        key={comment.id}
        comment={comment}
      />
    );
  });

  return (
    <div>
      {commentList}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
