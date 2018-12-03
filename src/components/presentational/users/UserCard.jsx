import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 5px;
  border: 1px solid black;
`;

const UserCard = ({ user }) => {
  const { id, name, email } = user;

  return (
    <StyledDiv>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>email: {email}</p>
      <Link to={ROUTES.USER_DETAIL.linkTo(id)}>
        See more...
      </Link>
    </StyledDiv>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserCard;
