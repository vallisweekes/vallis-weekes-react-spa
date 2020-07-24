import React from 'react';
import { Link } from 'react-router-dom';

import { LinkUl, LinkItem } from '../utils/styles';
import SocialIcon from './Header/TopBar/SocialIcon';

const SideBar = ({ handleSideBarClose }) => {
	return (
		<div>
			<div className='close-btn' onClick={handleSideBarClose}>
				<div>&times;</div>
			</div>
			<LinkUl>
				<LinkItem>
					<Link to='/' style={{ color: '#ffffff' }}>
						Home
					</Link>
				</LinkItem>
				<LinkItem>
					<Link to='/projects' style={{ color: '#ffffff' }}>
						Projects
					</Link>
				</LinkItem>
				{/* <LinkItem>
					<Link to='/about' style={{ color: '#ffffff' }}>
						About
					</Link>
				</LinkItem> */}
				<LinkItem>
					<Link to={'/contact'} style={{ color: '#ffffff' }}>
						Contact
					</Link>
				</LinkItem>
			</LinkUl>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
				<SocialIcon invert={true} />
			</div>
		</div>
	);
};

export default SideBar;
