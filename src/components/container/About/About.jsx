import React from 'react';
import Intro from './Intro';
import Expirience from './Expirience';
import Skills from './Skills';
import Education from './Education';
import { AboutPageWrapper } from '../../../utils/styles';

const About = () => {
  return (
    <AboutPageWrapper>
      <Intro />
      <Expirience />
      <Skills />
      <Education />
    </AboutPageWrapper>
  );
};

export default About;
