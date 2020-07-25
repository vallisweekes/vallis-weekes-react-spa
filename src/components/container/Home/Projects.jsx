import React, { useState, useEffect } from 'react';
import Card from './card-component/Card';

import { results } from '../../../db/projects.json';
import { ProjectsContainer, ProjectsWrapper, SectionHeading, SectionPara } from '../../../utils/styles';
import Filters from './filters-component/Filters';

const category = ['ALL', 'React-JS', 'jquery', 'Html/Css', 'Wordpress'];
const Projects = () => {
	const [active, setActive] = useState('');

	useEffect(() => {
		setActive('all');
	}, []);

	const handleFilter = (cat) => {
		let category = cat.toLowerCase();
		setActive(category);
	};

	const filterProjects = results.filter((project) => {
		if (active === 'all') return results;
		else return project.category.toLowerCase() === active;
	});

	return (
		<section>
			<ProjectsContainer>
				<SectionHeading>
					<h2>Projects</h2>
				</SectionHeading>
				<SectionPara>View some of my work here</SectionPara>
				<Filters active={active} onFilter={handleFilter} category={category} />
				<ProjectsWrapper>
					{filterProjects.map((p) => (
						<Card key={p._id} image={p.image} project={p} />
					))}
				</ProjectsWrapper>
			</ProjectsContainer>
		</section>
	);
};

export default Projects;
