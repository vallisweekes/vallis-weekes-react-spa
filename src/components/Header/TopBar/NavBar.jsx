import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  const Nav = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin-right: 2rem;
  `;
  return (
    <Nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}>Contact</NavLink>
      </li>
    </Nav>
  );
};

export default NavBar;
