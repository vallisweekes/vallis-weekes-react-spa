import React from 'react';
import TopBar from './TopBar/TopBar';
import HeaderText from './HeaderText';

import styled from 'styled-components';

const Header = () => {
  const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 50vh;
  `;
  return (
    <Header>
      <TopBar />
      <HeaderText />
    </Header>
  );
};

export default Header;
