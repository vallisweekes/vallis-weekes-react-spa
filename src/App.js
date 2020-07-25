import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from '../src/components/Layout';

import './App.scss';

const App = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</Fragment>
	);
};

export default App;
