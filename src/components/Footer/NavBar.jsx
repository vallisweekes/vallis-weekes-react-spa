import React from 'react';
import { NavLink } from 'react-router-dom';
import { FooterMenu } from '../../utils/styles';

const NavBar = () => {
	return (
		<FooterMenu>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/projects'>Projects</NavLink>
			</li>
			{/* <li>
        <NavLink to="/about">About</NavLink>
      </li> */}
			<li>
				<NavLink to={'/contact'}>Contact</NavLink>
			</li>
		</FooterMenu>
	);
};

export default NavBar;
