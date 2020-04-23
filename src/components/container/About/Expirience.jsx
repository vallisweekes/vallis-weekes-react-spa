import React from 'react';
import {
  AboutMeExpirience,
  AboutMePageRight,
  AboutMePageLeft,
  AboutPageInner,
} from '../../../utils/styles';
const Expirience = () => {
  return (
    <AboutMeExpirience>
      <AboutPageInner>
        <AboutMePageLeft>
          <h2>Experience</h2>
        </AboutMePageLeft>
        <AboutMePageRight>
          <h2>Vision Direct</h2>
          <p>Web Delivery Executive</p>
          <p>
            Operate in fast-paced, e-commerce, Agile environment to migrate
            content across the company’s 7 markets (Magento to coreMedia). Lead
            staff onboarding procedures and translate technical requirements to
            non-technical personnel. Collaborate with project owner and
            non-technical team, attend brainstorming sessions, and conduct
            research; design UX prior to launch.
          </p>
        </AboutMePageRight>
      </AboutPageInner>
    </AboutMeExpirience>
  );
};

export default Expirience;
