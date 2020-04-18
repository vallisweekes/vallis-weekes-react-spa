import React from 'react';
import { StackHolder } from '../../utils/styles';
const Stack = ({ image }) => {
  return (
    <section>
      <StackHolder>
        <img src={image} alt="" style={{ width: 20, height: 20 }} />
      </StackHolder>
    </section>
  );
};

export default Stack;
