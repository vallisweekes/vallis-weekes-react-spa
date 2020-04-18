import React from 'react';

import { Link } from 'react-router-dom';
import { SideBarContainer, LinkItems, CloseButton } from '../utils/styles';

const SideBar = ({ closeSideBar }) => {
  return (
    <SideBarContainer>
      <LinkItems>
        <CloseButton onClick={closeSideBar}>&times;</CloseButton>
        <li>
          <Link to="/" style={{ color: '#ffffff' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: '#ffffff' }}>
            About
          </Link>
        </li>
        <li>
          <Link to={'/contact'} style={{ color: '#ffffff' }}>
            Contact
          </Link>
        </li>
      </LinkItems>
    </SideBarContainer>
  );
};

export default SideBar;
