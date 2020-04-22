import React from 'react';
import {
  IntroText,
  HeaderIntro,
  SubTextWrapper,
} from '../../../src/utils/styles';
const HeaderText = () => {
  return (
    <IntroText>
      <HeaderIntro>
        <h1>MOTIVATED</h1>
      </HeaderIntro>
      <SubTextWrapper>
        <h2 className="fadeInDown">FRONT END DEVELOPER</h2>
      </SubTextWrapper>
    </IntroText>
  );
};

export default HeaderText;
