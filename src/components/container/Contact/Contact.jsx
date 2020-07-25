import React from 'react';
import { ProjectProvider } from '../../../context/ProjectContext';
import Simple from './Simple';
const Contact = () => {
	return (
		<div style={{ width: '100%' }}>
			<ProjectProvider>
				<Simple />
			</ProjectProvider>
		</div>
	);
};

export default Contact;
