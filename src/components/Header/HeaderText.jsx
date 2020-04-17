import React from 'react';
import { IntroText } from '../../../src/utils/styles';
const HeaderText = () => {
  return (
    <IntroText>
      <h1 style={{ wordSpacing: 10, letterSpacing: 3, fontSize: 40 }}>
        VALLIS WEEKES
      </h1>
      <div
        style={{
          padding: 2,
          marginTop: 10,
          border: '1px solid #000000',
        }}
      >
        <h2>Full-Stack Developer</h2>
      </div>
    </IntroText>
  );
};

export default HeaderText;
