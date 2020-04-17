import React from 'react';
import TopBar from './TopBar/TopBar';
import Intro from './Intro';
import { HeaderWrapper } from '../../utils/styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <TopBar />
      <Intro />
    </HeaderWrapper>
  );
};

export default Header;
