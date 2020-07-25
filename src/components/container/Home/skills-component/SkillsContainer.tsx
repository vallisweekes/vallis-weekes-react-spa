import React from 'react';

import Skill from './skill-component/Skill';
import skillsData from '../../../../db/skillsData.json';
import { SectionHeading, SkillsFilter } from '../../../../utils/styles';
import './skills-container.styles.scss';
import Filters from '../filters-component/Filters';

const category = ['Front End', 'Back End', 'Tools'];

interface SkillsContainerProps {}

type Skill = {
	id: number;
	title: string;
	score: number;
	category: string;
};

const SkillsContainer: React.FC<SkillsContainerProps> = () => {
	const [active, setActive] = React.useState('');

	React.useEffect(() => {
		setActive('front end');
	}, []);

	const handleFilter = (cat: string) => {
		let category = cat.toLowerCase();
		setActive(category);
	};

	const filterSkills = skillsData.skills.filter((skill) => {
		if (active === 'front end') return skill.category.toLowerCase() === active;
		else return skill.category.toLowerCase() === active;
	});

	return (
		<section className='skills-main-wrap'>
			<div className='skills-container'>
				<SectionHeading>
					<h2>Skills</h2>
				</SectionHeading>
				<SkillsFilter>
					<Filters active={active} onFilter={handleFilter} category={category} />
				</SkillsFilter>
				{filterSkills && filterSkills.map((skill: Skill) => <Skill key={skill.id} title={skill.title} score={skill.score} />)}
			</div>
		</section>
	);
};

export default SkillsContainer;
