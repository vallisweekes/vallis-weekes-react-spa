import React from 'react';
import { Link } from 'react-router-dom';
import { InvertedLogo } from '../utils/styles';
const Logo = () => {
	return (
		<InvertedLogo>
			<Link to='/'>
				<h3>VALLIS WEEKES</h3>
			</Link>
		</InvertedLogo>
	);
};

export default Logo;
