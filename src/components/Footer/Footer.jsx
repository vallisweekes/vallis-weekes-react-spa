import React from 'react';
import Mobile from './Mobile';
import styled from 'styled-components';
const Footer = () => {
  const FooterWrapper = styled.footer`
    position: fixed;

    width: 100%;
    bottom: 0;
    height: 70px;
    background-color: #fafafa;
  `;
  return (
    <FooterWrapper>
      <Mobile />
    </FooterWrapper>
  );
};

export default Footer;
