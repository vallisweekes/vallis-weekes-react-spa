import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import SkillsContainer from './skills-component/SkillsContainer';
const Home = () => {
	return (
		<section>
			<Projects />
			<SkillsContainer />
			<AboutMe />
		</section>
	);
};

export default Home;
