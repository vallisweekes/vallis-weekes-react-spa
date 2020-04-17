import React from 'react';
import NavBar from './NavBar';
import SocialIcon from './SocialIcon';
import styled from 'styled-components';
const TopBar = () => {
  const TopBar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem 1rem 0 0;
  `;
  return (
    <TopBar>
      <NavBar />
      <SocialIcon />
    </TopBar>
  );
};

export default TopBar;
