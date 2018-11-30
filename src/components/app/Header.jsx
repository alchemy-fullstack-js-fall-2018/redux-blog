import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${ ({ theme }) => theme.primary };
  color: ${ ({ theme }) => theme.secondary };
`;

const StyledNav = styled.nav`
  margin: 0px 0px 15px 0px;
`;

const StyledLink = styled(Link)`
  box-sizing: border - box;

  text-decoration: none;
  color: ${ ({ theme }) => theme.secondary };
  margin: 5px;
  padding: 8px;
  border: 1px solid white;

  &:hover {
    color: ${ ({ theme }) => theme.darksecondary };
    border: 1px solid ${ ({ theme }) => theme.darksecondary };
  }
`;

const Header = () => {

  const links = [
    // { label: 'About', path: '/about' },
    // { label: 'Home', path: '/home' },
    { label: 'Members', path: '/cars/search' },
    { label: 'Lot', path: '/lot/search' },
    { label: 'Register', path: '/cars/new' }
  ];
  const LinkComponents = links.map(link => {
    return (
      <StyledLink key={link.label} to={link.path}>
        {link.label}
      </StyledLink>
    );
  });

  return (
    <StyledHeader>
      <h1>Parking Lot</h1>
      <StyledNav>
        {LinkComponents}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
