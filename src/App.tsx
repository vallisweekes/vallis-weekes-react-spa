import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext';
import { SkillsProvider } from './context/SkillsContext';
import Layout from './components/Layout';

import './App.scss';

const App = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<ProjectProvider>
					<SkillsProvider>
						<Layout />
					</SkillsProvider>
				</ProjectProvider>
			</BrowserRouter>
		</Fragment>
	);
};

export default App;
