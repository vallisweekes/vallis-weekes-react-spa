import React from 'react';
import {
  AboutMeSkills,
  AboutMePageRight,
  AboutMePageLeft,
  AboutPageInner,
} from '../../../utils/styles';

const Skills = () => {
  return (
    <AboutMeSkills>
      <AboutPageInner>
        <AboutMePageLeft>
          <h2>Skills</h2>
        </AboutMePageLeft>
        <AboutMePageRight>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Nextjs</li>
            <li>Express</li>
            <li>jQuery</li>
            <li>HTML5</li>
            <li>CSS</li>
          </ul>
        </AboutMePageRight>
      </AboutPageInner>
    </AboutMeSkills>
  );
};

export default Skills;
