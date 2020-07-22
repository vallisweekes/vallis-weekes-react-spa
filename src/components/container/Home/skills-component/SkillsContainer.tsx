import React from 'react';

import Skill from './skill-component/Skill';
import { SectionHeading } from '../../../../utils/styles';
import './skills-container.styles.scss';

const skills = [
	{ id: 1, title: 'Javascript', score: 70 },
	{ id: 2, title: 'React', score: 60 },
	{ id: 3, title: 'jQuery', score: 60 },
	{ id: 4, title: 'HTML', score: 80 },
	{ id: 5, title: 'CSS', score: 70 },
	{ id: 6, title: 'Node', score: 40 },
	{ id: 7, title: 'Wordpress', score: 70 },
];
interface SkillsContainerProps {}

type Skill = {
	id: number;
	title: string;
	score: number;
};

const SkillsContainer: React.FC<SkillsContainerProps> = () => {
	return (
		<section className='skills-main-wrap'>
			<div className='skills-container'>
				<SectionHeading>
					<h2>Skills</h2>
				</SectionHeading>
				{skills.map((skill: Skill) => (
					<Skill title={skill.title} score={skill.score} />
				))}
			</div>
		</section>
	);
};

export default SkillsContainer;
