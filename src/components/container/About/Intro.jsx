import React from 'react';
import {
  AboutMeIntro,
  AboutMePageRight,
  AboutMePageLeft,
  AboutPageInner,
} from '../../../utils/styles';

const Intro = () => {
  return (
    <AboutMeIntro>
      <AboutPageInner>
        <AboutMePageLeft>
          <div>
            <h2>
              Vallis <span style={{ color: 'red ' }}>Weekes</span>
            </h2>
          </div>
          <div>
            <p>
              Location: <span>London</span>
            </p>
          </div>
        </AboutMePageLeft>
        <AboutMePageRight>
          <h3>Hello</h3>
          <p>
            I am Full - stack developer and holds a Diploma in Front end
            development at open classrooms.
          </p>
        </AboutMePageRight>
      </AboutPageInner>
    </AboutMeIntro>
  );
};

export default Intro;
