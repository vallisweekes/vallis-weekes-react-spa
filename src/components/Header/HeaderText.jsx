import React from 'react';
import styled from 'styled-components';
const HeaderText = () => {
  const HeaderText = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');

    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Source Sans Pro', sans-serif;
  `;

  return (
    <HeaderText>
      <h1 style={{ letterSpacing: 4 }}>VALLIS WEEKES</h1>
      <div
        style={{
          display: 'flex',
          height: 50,
          alignItems: 'center',
          padding: 10,
          marginTop: 10,
          border: '1px solid #000000',
        }}
      >
        <h2>Full-Stack Developer</h2>
      </div>
    </HeaderText>
  );
};

export default HeaderText;
