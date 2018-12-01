import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 5px;
  border: 1px solid black;
`;

const PostCard = ({ post }) => {
  const { id, userId, title, body } = post;

  return (
    <StyledDiv>
      <p>id: {id}</p>
      <p>userId: {userId}</p>
      <p>title: {title}</p>
      <p>preview: {body.slice(0, 25)}</p>
      <Link to={ROUTES.POST_DETAIL.linkTo(id)}>
        See more...
      </Link>
    </StyledDiv>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostCard;
