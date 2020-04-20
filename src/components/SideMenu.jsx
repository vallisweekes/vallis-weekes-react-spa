import React from 'react';
import { Link } from 'react-router-dom';
import { sideBarControl, LinkItems } from '../utils/styles';

const SideBar = ({ showSideBar }) => {
  const SideBarController = sideBarControl(showSideBar);
  return (
    <SideBarController>
      <LinkItems>
        <li>
          <Link to="/" style={{ color: '#ffffff' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" style={{ color: '#ffffff' }}>
            Projects
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
    </SideBarController>
  );
};

export default SideBar;
