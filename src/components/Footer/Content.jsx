import React from 'react';
import { FooterContentWrapper } from '../../utils/styles';
const Content = () => {
  return (
    <FooterContentWrapper>
      <p>
        Copyright &copy; {new Date().getFullYear()} Vallis Weekes All rights
        reserved
      </p>
    </FooterContentWrapper>
  );
};

export default Content;
