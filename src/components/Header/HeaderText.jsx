import React from 'react';
import { IntroText } from '../../../src/utils/styles';
const HeaderText = () => {
  return (
    <IntroText>
      <h1 style={{ wordSpacing: 1, letterSpacing: 1, fontSize: 60 }}>
        VALLIS WEEKES
      </h1>
      <div
        style={{
          fontSize: 30,
          padding: 2,
          marginTop: 10,
          border: '1px solid #000000',
        }}
      >
        <h2 className="fadeInDown">Full-Stack Developer</h2>
      </div>
    </IntroText>
  );
};

export default HeaderText;
