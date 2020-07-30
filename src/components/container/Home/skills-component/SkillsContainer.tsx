import React from 'react';

import Skill from './skill-component/Skill';
import Filters from '../filters-component/Filters';

import { SectionHeading, SkillsFilter } from '../../../../utils/styles';
import './skills-container.styles.scss';

const category = ['Front End', 'Back End', 'Tools'];

type Skill = {
	_id: string;
	title: string;
	score: number;
	category: string;
	createdAt?: string;
};

interface SkillsContainerProps {
	skills: Skill[];
}

const SkillsContainer: React.FC<SkillsContainerProps> = ({ skills }) => {
	const [active, setActive] = React.useState('');

	React.useEffect(() => {
		setActive('front end');
	}, []);

	const handleFilter = (cat: string) => {
		let category = cat.toLowerCase();
		setActive(category);
	};

	const filterSkills =
		skills &&
		skills.filter((skill) => {
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
				{filterSkills && filterSkills.map((skill: Skill) => <Skill key={skill._id} title={skill.title} score={skill.score} />)}
			</div>
		</section>
	);
};

export default SkillsContainer;
