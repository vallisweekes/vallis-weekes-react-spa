import React from 'react';
import { StackHolder } from '../../utils/styles';
const Stack = ({ image }) => {
  return (
    <StackHolder>
      <img src={image} alt="" style={{ width: 30, height: 30 }} />
    </StackHolder>
  );
};

export default Stack;
