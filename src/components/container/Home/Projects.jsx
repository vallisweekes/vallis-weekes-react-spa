import React, { useState, useEffect } from 'react';
import Card from './card-component/Card';

import { results } from '../../../db/projects.json';
import { ProjectsContainer, ProjectsWrapper, SectionHeading } from '../../../utils/styles';
import Filters from './filters-component/Filters';

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
	console.log('filtered', filterProjects);
	return (
		<section>
			<ProjectsContainer>
				<SectionHeading>
					<h2>Projects</h2>
				</SectionHeading>
				<p>View some of my work here</p>
				<Filters active={active} onFilter={handleFilter} />
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
