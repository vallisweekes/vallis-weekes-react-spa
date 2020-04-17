import React from 'react';
import HeaderText from './HeaderText';
import Stacks from './Stacks';
import { IntroWrapper } from '../../utils/styles';
const Intro = () => {
  return (
    <IntroWrapper>
      <HeaderText />
      <Stacks />
    </IntroWrapper>
  );
};

export default Intro;
