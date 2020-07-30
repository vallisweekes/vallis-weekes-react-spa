import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
	const [project, setProject] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const {
					data: { projects },
				} = await axios.get('https://vallisweekesapp.herokuapp.com/api/v1/projects');
				setProject(projects);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return <ProjectContext.Provider value={project}>{children}</ProjectContext.Provider>;
};

// https://vallisweekesapp.herokuapp.com/api/v1/skills
