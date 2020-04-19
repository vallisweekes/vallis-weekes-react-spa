import React from 'react';
// import Mobile from './Mobile';
import Content from './Content';
import styled from 'styled-components';

const Footer = () => {
  const FooterWrapper = styled.footer`
    display: flex;
    align-items: center;
    /* position: fixed; */
    width: 100%;
    border-top: 1px solid rgb(234, 234, 234);
    height: 60px;
    background-color: #fafafa;
  `;

  const FooterContent = styled.div`
    width: 90%;
    margin: 0 auto;
  `;
  return (
    <FooterWrapper>
      <FooterContent>
        <Content />
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
