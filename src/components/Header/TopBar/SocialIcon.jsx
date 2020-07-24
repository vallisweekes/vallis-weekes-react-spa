import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { SocialIconWrapper, IconHolder } from '../../../utils/styles';
const SocialIcon = ({ invert }) => {
	return (
		<SocialIconWrapper>
			<IconHolder>
				<a href='https://twitter.com/VallisWeekes' target='_blank' rel='noopener noreferrer'>
					<TwitterIcon style={{ fontSize: 20, color: `${invert ? '#ffffff' : '#000000'}` }} />
				</a>
			</IconHolder>
			<IconHolder>
				<a href='https://github.com/vallisweekes' target='_blank' rel='noopener noreferrer'>
					<GitHubIcon style={{ fontSize: 20, color: `${invert ? '#ffffff' : '#000000'}` }} />
				</a>
			</IconHolder>
			<IconHolder>
				<a href='https://www.instagram.com/vallis.weekes' target='_blank' rel='noopener noreferrer'>
					<InstagramIcon style={{ fontSize: 20, color: `${invert ? '#ffffff' : '#000000'}` }} />
				</a>
			</IconHolder>
			<IconHolder>
				<a href='https://www.linkedin.com/in/vallisweekes' target='_blank' rel='noopener noreferrer'>
					<LinkedInIcon style={{ fontSize: 20, color: `${invert ? '#ffffff' : '#000000'}` }} />
				</a>
			</IconHolder>
		</SocialIconWrapper>
	);
};

export default SocialIcon;
