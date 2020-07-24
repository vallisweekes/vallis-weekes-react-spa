import React from 'react';
import Intro from './Intro';
import Expirience from './Expirience';
import Education from './Education';
import { AboutPageWrapper } from '../../../utils/styles';
import Skills from './Skills';

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
