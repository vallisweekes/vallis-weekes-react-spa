import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogo } from '../../../utils/styles';
const Logo = () => {
  return (
    <HeaderLogo>
      <Link to="/">
        <h3>VALLIS WEEKES</h3>
      </Link>
    </HeaderLogo>
  );
};

export default Logo;
