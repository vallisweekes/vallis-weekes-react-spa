import React from 'react';
import { AboutMeSkills, AboutMePageRight, AboutMePageLeft, AboutPageInner } from '../../../utils/styles';
import Skill from '../Home/skills-component/skill-component/Skill';
const skills = [
	{ id: 1, title: 'Javascript', score: 70 },
	{ id: 2, title: 'React', score: 60 },
	{ id: 3, title: 'jQuery', score: 60 },
	{ id: 4, title: 'HTML', score: 80 },
	{ id: 5, title: 'CSS', score: 70 },
	{ id: 6, title: 'Node', score: 40 },
	{ id: 7, title: 'Wordpress', score: 70 },
];

const Skills = () => {
	return (
		<AboutMeSkills>
			<AboutPageInner>
				<AboutMePageLeft>
					<h2>Skills</h2>
				</AboutMePageLeft>
				<AboutMePageRight>
					{skills.map((skill) => (
						<Skill title={skill.title} score={skill.score} />
					))}
				</AboutMePageRight>
			</AboutPageInner>
		</AboutMeSkills>
	);
};

export default Skills;
