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
          <h3>Front End Developer</h3>
          <p>
            I am a self-motivated, enthusiastic and ambitious individual, with a
            keen interest in Web Development. I enjoy working in a collaborative
            environment or taking the initiative to successfully achieve targets
            and overcome the project specific challenges. As someone who takes
            responsibility for my personal development, I take a proactive
            approach to continually evaluate and upgrade my skills in order to
            maintain my experience, as web development and the wider industry
            continues to rapidly evolve.
          </p>
        </AboutMePageRight>
      </AboutPageInner>
    </AboutMeIntro>
  );
};

export default Intro;
