import React from 'react';
import { Link } from 'react-router-dom';
import { sideBarControl, LinkUl, LinkItem } from '../utils/styles';

const SideBar = ({ showSideBar }) => {
  const SideBarController = sideBarControl(showSideBar);
  return (
    <SideBarController>
      <LinkUl>
        <LinkItem>
          <Link to="/" style={{ color: '#ffffff' }}>
            Home
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to="/projects" style={{ color: '#ffffff' }}>
            Projects
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to="/about" style={{ color: '#ffffff' }}>
            About
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to={'/contact'} style={{ color: '#ffffff' }}>
            Contact
          </Link>
        </LinkItem>
      </LinkUl>
    </SideBarController>
  );
};

export default SideBar;
