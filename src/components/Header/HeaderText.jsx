import React from 'react';
import styled from 'styled-components';
const HeaderText = () => {
  const HeaderText = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <HeaderText>
      <h1>Vallis Weekes</h1>
      <h2>Full-Stack Developer</h2>
    </HeaderText>
  );
};

export default HeaderText;
