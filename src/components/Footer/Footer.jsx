import React from 'react';
// import Mobile from './Mobile';
import Content from './Content';
import NavBar from './NavBar';
import { FooterWrapper, FooterContent } from '../../utils/styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Content />
      </FooterContent>
      <section>
        <NavBar />
      </section>
    </FooterWrapper>
  );
};

export default Footer;
