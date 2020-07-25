import React from 'react';
import { Helmet } from 'react-helmet';
// import AboutMe from './AboutMe';
import Projects from './Projects';

import SkillsContainer from './skills-component/SkillsContainer';
import Methodologies from '../../methodologies-component/Methodologies';
const Home = () => {
	return (
		<section>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Vallis Weekes | Front End Developer</title>
			</Helmet>

			<Projects />

			<SkillsContainer />
			{/* <AboutMe /> */}
			<Methodologies />
		</section>
	);
};

export default Home;
