import React from 'react';
import { Helmet } from 'react-helmet';
// import AboutMe from './AboutMe';
import Projects from './Projects';

import SkillsContainer from './skills-component/SkillsContainer';
import Methodologies from '../../methodologies-component/Methodologies';
import ContentOffset from '../../content-offset-component/ContentOffset';

import { ProjectContext } from '../../../context/ProjectContext';
import { SkillsContext } from '../../../context/SkillsContext';

const Home = () => {
	return (
		<section>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Vallis Weekes | Front End Developer</title>
			</Helmet>
			<ProjectContext.Consumer>{(value) => <Projects projects={value} />}</ProjectContext.Consumer>

			<ContentOffset />
			<SkillsContext.Consumer>{(value) => <SkillsContainer skills={value} />}</SkillsContext.Consumer>

			<Methodologies />

			{/* <AboutMe /> */}
		</section>
	);
};

export default Home;
