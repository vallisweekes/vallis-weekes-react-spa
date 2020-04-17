import React from 'react';
import styled from 'styled-components';
const AboutMe = () => {
  const AboutWrapper = styled.div`
    height: 300px;
    margin-bottom: 5rem;
    background-image: url('https://portfolio-vw.s3.eu-west-2.amazonaws.com/about-me.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
  `;
  return <AboutWrapper>About</AboutWrapper>;
};

export default AboutMe;
