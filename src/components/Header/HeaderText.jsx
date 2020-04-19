import React from 'react';
import { IntroText, HeaderIntro } from '../../../src/utils/styles';
const HeaderText = () => {
  return (
    <IntroText>
      <HeaderIntro>
        <h1>MOTIVATED</h1>
      </HeaderIntro>
      <div
        style={{
          fontSize: 25,
          padding: 2,
          marginTop: 10,
          color: '#828282',
          border: '1px solid #828282',
        }}
      >
        <h2 className="fadeInDown">FULL-STACK DEVELOPER</h2>
      </div>
    </IntroText>
  );
};

export default HeaderText;
