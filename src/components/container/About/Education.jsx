import React from 'react';
import {
  AboutMeEducation,
  AboutMePageRight,
  AboutMePageLeft,
  AboutPageInner,
} from '../../../utils/styles';
const Education = () => {
  return (
    <AboutMeEducation>
      <AboutPageInner>
        <AboutMePageLeft>
          <h2>Education</h2>
        </AboutMePageLeft>
        <AboutMePageRight>
          <ul>
            <li>Front End Web Developer - Diploma at Open classrooms</li>
          </ul>
        </AboutMePageRight>
      </AboutPageInner>
    </AboutMeEducation>
  );
};

export default Education;
