import React from 'react';
import Stack from './Stack';
import styled from 'styled-components';

const StacksContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
const images = [
  'https://portfolio-vw.s3.eu-west-2.amazonaws.com/Icons/rails.png',
  'https://portfolio-vw.s3.eu-west-2.amazonaws.com/Icons/javascript.png',
  'https://portfolio-vw.s3.eu-west-2.amazonaws.com/Icons/node.png',
  'https://portfolio-vw.s3.eu-west-2.amazonaws.com/Icons/react.png',
];
const Stacks = () => {
  return (
    <StacksContainer>
      {images && images.map((n, i) => <Stack image={n} />)}
    </StacksContainer>
  );
};

export default Stacks;
