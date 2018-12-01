import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${ ({ theme }) => theme.primary };
  color: ${ ({ theme }) => theme.secondary };

  h1 {
    font-family: BOMBARD, "Avenir Next", sans-serif;
    font-weight: bolder;
    letter-spacing: 2px;
    font-size: 36px;
  }
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
    { label: 'Home', path: '/home' },
    { label: 'Posts', path: '/posts/search' },
    { label: 'Users', path: '/users' },
    { label: 'Register', path: '/users/new' }
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
      <h1>Redux Blogging</h1>
      <StyledNav>
        {LinkComponents}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
