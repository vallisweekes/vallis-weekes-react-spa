import React, { useState, createContext } from 'react';
import projects from '../db/projects.json';

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
	const [project, setProjects] = useState(projects.results);
	console.log(project);
	return <ProjectContext.Consumer value={project}>{props.children}</ProjectContext.Consumer>;
};
