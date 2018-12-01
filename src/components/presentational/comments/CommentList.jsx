import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard.jsx';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const CommentList = ({ comments }) => {

  const commentList = comments.map(comment => {
    return (
      <CommentCard
        key={comment.id}
        comment={comment}
      />
    );
  });

  return (
    <div>
      <StyledDiv>
        {commentList}
      </StyledDiv>
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;


// this.props.fetchComments(this.prop.match.params.id);
