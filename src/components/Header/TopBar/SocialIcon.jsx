import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { SocialIconWrapper, IconHolder } from '../../../utils/styles';
const SocialIcon = () => {
  return (
    <SocialIconWrapper>
      <IconHolder>
        <TwitterIcon style={{ fontSize: 20 }} />
      </IconHolder>
      <IconHolder>
        <GitHubIcon style={{ fontSize: 20 }} />
      </IconHolder>
      <IconHolder>
        <InstagramIcon style={{ fontSize: 20 }} />
      </IconHolder>
      <IconHolder>
        <LinkedInIcon style={{ fontSize: 20 }} />
      </IconHolder>
    </SocialIconWrapper>
  );
};

export default SocialIcon;
