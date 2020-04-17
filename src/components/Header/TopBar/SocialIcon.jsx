import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import styled from 'styled-components';
const SocialIcon = () => {
  const SocialIcon = styled.div`
    display: flex;
    justify-content: flex-end;
  `;
  const IconHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #000000;
    border-radius: 50px;
    margin-right: 0.75rem;
    cursor: pointer;
  `;
  return (
    <SocialIcon>
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
    </SocialIcon>
  );
};

export default SocialIcon;
