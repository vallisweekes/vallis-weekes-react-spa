import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from '../../../utils/styles';

const NavBar = () => {
  return (
    <Nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
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
