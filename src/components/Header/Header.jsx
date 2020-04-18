import React from 'react';
import TopBar from './TopBar/TopBar';
import Intro from './Intro';
import { HeaderWrapper } from '../../utils/styles';

const Header = () => {
  return (
    <section className="h-content">
      <HeaderWrapper>
        <TopBar />
        <Intro />
      </HeaderWrapper>
    </section>
  );
};

export default Header;
