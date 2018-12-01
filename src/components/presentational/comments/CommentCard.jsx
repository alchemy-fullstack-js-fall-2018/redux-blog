import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 5px;
  border: 1px solid black;
`;

const CommentCard = ({ comment }) => {
  const { id, postId, name, email, body } = comment;

  return (
    <StyledDiv>
      <p>id: {id}</p>
      <p>postId: {postId}</p>
      <p>name: {name}</p>
      <p>email: {email}</p>
      <p>body: {body}</p>
    </StyledDiv>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired
};

export default CommentCard;
