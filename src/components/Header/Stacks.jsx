import React from 'react';
import Stack from './Stack';
import styled from 'styled-components';

const StacksContainer = styled.div`
	display: flex;
	margin-top: 10px;
`;
const images = ['/rails.png', '/javascript.png', '/node.png', '/react.png', '/nextjs.png', '/css.png', '/html.png'];
const Stacks = () => {
	return <StacksContainer>{images && images.map((n, i) => <Stack key={i} image={n} />)}</StacksContainer>;
};

export default Stacks;
