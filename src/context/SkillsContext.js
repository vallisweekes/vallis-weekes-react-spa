import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
	const [skills, setSkills] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const {
					data: { skills },
				} = await axios.get('https://vallisweekesapp.herokuapp.com/api/v1/skills');
				setSkills(skills);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return <SkillsContext.Provider value={skills}>{children}</SkillsContext.Provider>;
};

// https://vallisweekesapp.herokuapp.com/api/v1/skills
