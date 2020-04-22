import React from 'react';
import Stack from './Stack';
import styled from 'styled-components';

const StacksContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
const images = [
  'http://www.vallisweekes.com/portfolio_assets/rails.png',
  'https://www.vallisweekes.com/portfolio_assets/javascript.png',
  'https://www.vallisweekes.com/portfolio_assets/node.png',
  'https://www.vallisweekes.com/portfolio_assets/react.png',
  'https://www.vallisweekes.com/portfolio_assets/nextjs.png',
  'https://www.vallisweekes.com/portfolio_assets/css.png',
  'https://www.vallisweekes.com/portfolio_assets/html.png',
];
const Stacks = () => {
  return (
    <StacksContainer>
      {images && images.map((n, i) => <Stack key={i} image={n} />)}
    </StacksContainer>
  );
};

export default Stacks;
