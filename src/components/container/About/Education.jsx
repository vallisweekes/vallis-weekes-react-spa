import React from 'react';
import {
  AboutMeEducation,
  AboutMePageRight,
  AboutMePageLeft,
  FlexFix,
} from '../../../utils/styles';
const Education = () => {
  return (
    <AboutMeEducation>
      <FlexFix>
        <AboutMePageLeft>
          <h2>Education</h2>
          <div style={{ width: 30, height: 30 }}>
            <img
              src="http://www.vallisweekes.com/portfolio_assets/openclassrooms_logo.png"
              alt="Openclassrooms"
              style={{ width: 30, height: 30 }}
            />
          </div>
        </AboutMePageLeft>
        <AboutMePageRight>
          <ul>
            <li>Front End Web Developer - Diploma at Open classrooms</li>
          </ul>
        </AboutMePageRight>
      </FlexFix>
    </AboutMeEducation>
  );
};

export default Education;
